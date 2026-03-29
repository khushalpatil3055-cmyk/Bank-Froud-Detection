const connecttomongo = require('./db');

// Call it before starting the server
connecttomongo();

const app = require('./app'); // or create your express app
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});