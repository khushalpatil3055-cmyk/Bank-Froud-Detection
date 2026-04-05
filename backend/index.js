const connecttomongo = require('./db');
const express = require('express');

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3001', // Allow only your frontend
  credentials: true
}));
// ✅ Middleware (VERY IMPORTANT)
app.use(express.json());

// ✅ Connect DB (ONLY ONCE)
connecttomongo();

// ✅ Routes
app.use('/api/auth', require('./routes/authRoutes'));

// ✅ Test Route
app.get('/', (req, res) => {
  res.send("API Running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});