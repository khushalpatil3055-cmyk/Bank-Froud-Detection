const express = require("express");
const connectDB = require("./db");

const app  = express();
app.use(express.json());

connectDB();

app.get("/",(req,res)=>{
    res.send("Backend Running");
});

app.listen(5000,() => console.log("serever Running on port 5000"));