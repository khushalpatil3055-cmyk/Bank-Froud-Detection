
const connecttomongo = require('./db');
const express = require('express')
connecttomongo();
const app = express()
const port = 3000
connecttomongo();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Call it before starting the server


