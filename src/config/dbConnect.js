const mongoose = require('mongoose');
const connectionString = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;

