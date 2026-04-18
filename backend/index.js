const connecttomongo = require('./db');
const express = require('express');

const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
// ✅ Middleware (VERY IMPORTANT)
app.use(express.json());

// ✅ Connect DB (ONLY ONCE)
connecttomongo();

// ✅ Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
// ✅ Test Route
app.get('/', (req, res) => {
  res.send("API Running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});