const User = require("../models/User");
const Transaction = require("../models/Transaction");
const Alert = require("../models/Alert");
const axios = require("axios");

exports.maketransaction = async (req,res) => {
    try {
        const {receiver_account,amount} = req.body;
        const sender_id = req.user.id;

        const sender = await User.findById(sender_id);
        if(!sender){
            return res.status(404).json({message : "Sender Not found"});

        }

        if(sender.balance < amount){
            return res.status(400).json({message: "Insufficient balance"});

        }

        const receiver = await User.findOne({account_number : receiver_account});
        if(!receiver){
            return res.status(404).json({ message: "Receiver not found" });
        }

        const features = new  Array(30).fill(0);
        features[28] = amount / 1000;

        let risk_score = 0;
        let status = "safe";
        let reasons = [];
        try {
             const mlResponse = await axios.post(
             "http://127.0.0.1:5000/predict",
            { features }
            );
      risk_score = mlResponse.data.risk_score;
      status = mlResponse.data.status;
      reasons = mlResponse.data.reasons.map(r => r.feature + ": " + r.impact);
        } catch (mlError) {
              console.log("ML Model error:", mlError.message);
         }

         const txn_code = "TX" + Date.now();

         const transaction = await Transaction.create({
            txn_code,
            sender_id,
            receiver_id: receiver._id,
            sender_account: sender.account_number,
            receiver_account,
            amount,
            risk_score,
            status,
            reasons
         });

         if (status !== "flagged") {
      await User.findByIdAndUpdate(sender_id, {
        $inc: { balance: -amount }
      });
      await User.findByIdAndUpdate(receiver._id, {
        $inc: { balance: amount }
      });
    }

     if (status === "flagged" || status === "suspicious") {
      await Alert.create({
        transaction_id: transaction._id,
        sender_id,
        reason: reasons.join(", "),
        risk_score,
        status: "pending"
      });
    }
     res.status(201).json({
      message: "Transaction completed",
      transaction,
      risk_score,
      status
    });


    } catch (error) {
        console.error(error);
    res.status(500).json({ message: "Server error" });
    }


};

exports.getMyTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      $or: [
        { sender_id: req.user.id },
        { receiver_id: req.user.id }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate("sender_id", "name email account_number")
      .populate("receiver_id", "name email account_number")
      .sort({ createdAt: -1 });

    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};