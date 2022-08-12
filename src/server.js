require('dotenv').config();
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConnect');
const verifyJWT = require("./middleware/verifyJWT");
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/api/users');
const registerRoute = require('./routes/register');
const refreshRoute = require('./routes/refresh');
const logoutRoute = require('./routes/logout');
const loginRoute = require('./routes/login');


// Connect to MongoDB
connectDB();

// custom middleware logger
app.use(logger);

// may want to remove after development---^
app.use(cors(corsOptions));

// Built-in middleware to handle form data
app.use(express.urlencoded({extended: false}));

// Built-in middleware for json
app.use(express.json());

// Middleware for cookies
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, '/public')));
//======================
//ROUTES
//======================
app.use(refreshRoute);
app.use(logoutRoute);
app.use(loginRoute);
app.use(registerRoute);

app.use(verifyJWT);
app.use(userRoutes);

app.use(errorHandler);
//======================
//SERVER
//======================
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => console.log(`Server running on port ${port}`));
})
