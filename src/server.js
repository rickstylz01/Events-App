require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbSetup');
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/api/users');

// custom middleware logger
app.use(logger);

// may want to remove after development---^
app.use(cors(corsOptions));

// Built-in middleware to handle form data
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
