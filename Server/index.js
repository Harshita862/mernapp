const express = require('express');
const app = express();
require('dotenv').config();
const port = 5000;
const mongoDB = require("./db");
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!!!!');
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Include allowed methods
  next();
});



app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Example app listening on port 5000`);
});
