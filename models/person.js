const { type } = require("express/lib/response");
const mongoose = require("mongoose");

// Define the person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String, // Changed from Number to String
    require: true,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
});

// Create person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
