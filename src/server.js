require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbSetup');
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/api/users');

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
// may want to remove after development---
const whitelist = [
  'https://www.yoursite.com',
  'http://127.0.0.1:5000',
  'http://localhost:5000'
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
}
// may want to remove after development---^
app.use(cors(corsOptions));

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
connectDB();
//======================
//ROUTES
//======================
app.use(userRoutes);

app.use(errorHandler);
//======================
//SERVER
//======================
app.listen(port, () => console.log(`Server running on port ${port}`));
