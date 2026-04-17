from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import json
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model and explainer
print("Loading model...")
model = pickle.load(open('models/fraud_model.pkl', 'rb'))
explainer = pickle.load(open('models/shap_explainer.pkl', 'rb'))
feature_names = json.load(open('models/feature_names.json', 'r'))
print("Model loaded! ✅")

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        'message': 'FraudGuard ML API is running!',
        'status': 'active'
    })

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get transaction data from request
        data = request.json
        
        # Convert to array
        features = np.array(data['features'])
        
        # Predict
        prediction = model.predict([features])[0]
        probability = model.predict_proba([features])[0][1]
        risk_score = round(probability * 100)
        
        # Get status
        if risk_score >= 71:
            status = 'flagged'
        elif risk_score >= 31:
            status = 'suspicious'
        else:
            status = 'safe'
        
        # SHAP explanation
        shap_vals = explainer.shap_values([features])[0]
        top_reasons = sorted(
            zip(feature_names, shap_vals),
            key=lambda x: abs(x[1]),
            reverse=True
        )[:3]
        
        reasons = []
        for feature, value in top_reasons:
            reasons.append({
                'feature': feature,
                'impact': 'increases fraud risk' if value > 0 else 'decreases fraud risk',
                'value': round(float(value), 3)
            })
        
        return jsonify({
            'success': True,
            'risk_score': risk_score,
            'status': status,
            'prediction': int(prediction),
            'reasons': reasons
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)