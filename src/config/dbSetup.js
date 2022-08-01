const mongoose = require('mongoose');
const connectionString = process.env.MONGO_URI;

module.exports = function () {
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log('MONGO CONNECTION OPEN!');
    })
    .catch((err) => {
      console.log('MONGO CONNECTION ERROR!', err);
    })
};
