const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");

// route prefix
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});