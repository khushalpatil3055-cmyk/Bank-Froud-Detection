const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  txn_code: {
    type: String,
    unique: true
  },
  sender_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  receiver_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  sender_account: {
    type: String,
    required: true
  },
  receiver_account: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  risk_score: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ["safe", "suspicious", "flagged"],
    default: "safe"
  },
  reasons: [{
    type: String
  }],
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);