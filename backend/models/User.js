const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  balance: {
    type: Number,
    default: 10000
  },
  // ✅ Added
  account_number: {
    type: String,
    unique: true
  },
  status: {
    type: String,
    enum: ["active", "blocked"],
    default: "active"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);