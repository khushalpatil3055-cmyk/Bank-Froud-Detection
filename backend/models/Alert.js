const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  transaction_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction",
    required: true
  },
  sender_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  reason: {
    type: String
  },
  risk_score: {
    type: Number
  },
  status: {
    type: String,
    enum: ["pending", "resolved", "ignored"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Alert", alertSchema);