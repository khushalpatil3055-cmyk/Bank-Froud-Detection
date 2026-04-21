const User = require("../models/User");
const Transaction  = require("../models/Transaction");
const Alert = require("../models/Alert");

exports.getStats = async (req , res ) => {
    try {
        const today = new Date();
        today.setHours(0,0,0,0);

        const thisMonth = new Date(today.getFullYear(),today.getMonth(),1);
        const thisYear = new Date(today.getFullYear(),0,1);

        const totalUsers = await User.countDocuments({role : "user"});
        const totalTransactions = await Transaction.countDocuments();
        const totalFlagged = await Transaction.countDocuments({status : "flagged"});
        const totalSuspicious = await Transaction.countDocuments({status : "suspicious"});

        const todayTransactions  = await Transaction.countDocuments({
        createdAt: { $gte: today }
        });

        const todayFraud = await Transaction.countDocuments({
            status : {$in : ["flagged" , "suspicious"] },
            createdAt : {$gte : today}
        });

        const monthFraud = await Transaction.countDocuments({
             status: { $in: ["flagged", "suspicious"] },
             createdAt: { $gte: thisMonth }
        });

        const yearFraud = await Transaction.countDocuments({
        status: { $in: ["flagged", "suspicious"] },
        createdAt: { $gte: thisYear }
        });

        const pendingAlerts = await Alert.countDocuments({status : "pending"});

        const last7Days = [];
        for(let i = 6;i>= 0 ; i--){
            const date = new Date();
            date.setDate(date.getDate() - 1);
            date.setHours(0,0,0,0);

            const nextDate = new Date(date);
            nextDate.setDate(nextDate.getDate() + 1);

            const count = await Transaction.countDocuments({
                status : {$in : ["flagged","suspicious"]},
                createdAt : {$gte : date , $lt : nextDate }
            });

             last7Days.push({
        date: date.toLocaleDateString('en-IN', { weekday: 'short' }),
        count
      });
        }

        res.status(200).json({
            totalUsers,
            totalTransactions,
            totalFlagged,
            totalSuspicious,
            todayTransactions,
            todayFraud,
            monthFraud,
            yearFraud,
            pendingAlerts,
            last7Days
        });


    } catch (error) {
        console.error(error);
    res.status(500).json({ message: "Server error" });
    }
};

exports.getAlerts = async (req , res ) => {
    try {
        const alerts = await Alert.find()
      .populate("transaction_id")
      .populate("sender_id", "name email account_number")
      .sort({ createdAt: -1 });

      res.status(200).json({ alerts });
    } catch (error) {
         res.status(500).json({ message: "Server error" });
    }
};

exports.updateAlert = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

      const alert = await Alert.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

     if (!alert) {
      return res.status(404).json({ message: "Alert not found" });
    }

    res.status(200).json({
        message: "Alert not found" 
    });
    res.status(200).json({
      message: `Alert ${status} successfully`,
      alert
    });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.getUsers = async(req,res)=>{
     try {
    const users = await User.find({ role: "user" })
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // "active" or "blocked"

    const user = await User.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: `User ${status} successfully`,
      user
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};