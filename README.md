# Secure Banking Fraud Detection System

A production-grade full-stack fraud detection platform that classifies financial transactions with **92% accuracy** using machine learning. Built with React frontend, Node.js backend, and Python ML pipeline.

## 🎯 Problem Solved
- Banks process millions of transactions daily
- Manual fraud detection is impossible at scale
- False positives create friction for legitimate customers
- Real-time detection needed (fraud happens in seconds)

**Solution:** An ML-powered system that detects fraud in real-time with 92% accuracy while minimizing customer friction.

## 💻 Tech Stack

### Frontend
- **Framework:** React.js
- **Styling:** CSS3, Bootstrap
- **State Management:** React Context/Redux
- **Visualization:** Chart.js for analytics
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** MongoDB
- **API Style:** RESTful

### Machine Learning
- **Language:** Python
- **Libraries:** Scikit-learn, Pandas, NumPy
- **Model:** Random Forest Classifier
- **Accuracy:** 92% on test data
- **Features:** 5 (amount, location, time, balance_delta, frequency)

## 📊 Key Metrics

- **Classification Accuracy:** 92% on test dataset
- **Features Used:** 5 transaction attributes
- **Prediction Latency:** <500ms per transaction
- **API Response Time:** Sub-second for real-time flagging
- **Database Queries:** Optimized with indexing for speed

## ✨ Core Features

### 1. Real-Time Fraud Detection
- Classifies transactions as fraudulent/legitimate in real-time
- Uses trained Random Forest model
- 92% accuracy on simulated transaction data
- Sub-500ms prediction time

### 2. Admin Dashboard
- Real-time transaction monitoring
- Fraud transaction flagging
- Visual analytics (pie charts, bar graphs)
- Search & filter functionality
- Transaction status updates (pending, approved, rejected)

### 3. JWT-Based Authentication
- Secure user login with JWT tokens
- Role-based access control
- Token refresh mechanism
- Password hashing with bcrypt

### 4. RESTful API Design
- Clean endpoint structure
- Proper HTTP status codes
- Error handling & validation
- Request/response logging

### 5. Database Optimization
- MongoDB collections for transactions & users
- Indexed queries for fast lookups
- Connection pooling for performance

## 🏗️ System Architecture
