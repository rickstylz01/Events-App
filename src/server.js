require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/dbSetup');
const port = process.env.PORT;

//======================
//BODYPARSER MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
//======================
//DB CONFIG
//======================
db();
//======================
//SERVER
//======================
app.listen(port, () => console.log(`Server running on port ${port}`));
