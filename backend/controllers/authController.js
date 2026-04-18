const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

   const user = await User.create({
  name,
  email,
  password: hashedPassword,
  role: "user",
  balance: 10000,
  account_number: "ACC" + Date.now() // auto generate
});
    res.status(201).json({
      message: "User registered successfully",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

exports.login = async (req,res) =>{
    try {
        const {email,password}=req.body;

        const user = await User.findOne({
            email
        });
        if(!user){
            return res.status(400).json({
                message : "user not found"
            });
        }
        const ismatch = await bcrypt.compare(password,user.password);
        if(!ismatch){
            return res.status(400).json({
                message: "Invalid password"
            });

            
        }
        const token = jwt.sign({
            id:user._id,role:user.role
        },
    "secretkey",
    { expiresIn: "1d" }
    );
    res.status(200).json({
        message:"Login Successful",
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        }
    })
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}