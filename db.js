//db.js is responsible for settind up the connectivity with nodejs
const mongoose = require("mongoose");

//define the mongoDB URL
const mongoURL = "mongodb://localhost:27017/hotels"; //replace 'hotels with your database name

//setup mongodb connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

//Define event listners for database connection
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconneted");
});

//expoer the database connection
module.exports = db;
