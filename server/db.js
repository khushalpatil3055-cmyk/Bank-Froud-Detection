const mongoose = require("monggose");

const connectDB = async () => {
    try{
        await mongoose.connect(
            "mongodb+srv://secure_banking:<Khushal@1005>@cluster0.cwy5pnt.mongodb.net/?appName=Cluster0",
             { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("MongoDB Connected");

    }   catch(error){
         console.error("MongoDB connection failed:", error.message);
    process.exit(1);
    }
};
 module.exports = connectDB;