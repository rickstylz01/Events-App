require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/dbSetup');
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/api/users');

// custom middleware logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({extended: false}));
// Built-in middleware for json
app.use(express.json());
// Serve static files
app.use(express.static(path.join(__dirname, '/public')));
//======================
//DB CONFIG
//======================
db();
//======================
//ROUTES
//======================
app.use(userRoutes);
//======================
//SERVER
//======================
app.listen(port, () => console.log(`Server running on port ${port}`));
