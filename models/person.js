const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

//pre is a middleware function && next is a callback function
personSchema.pre("save", async function (next) {
  const person = this;

  //Hash the password only if it has been modified (or is new)
  if (!person.isModified("password")) return next();
  try {
    //hash password generation
    const salt = await bcrypt.genSalt(10); //generating salt

    //hash password
    const hashedPassword = await bcrypt.hash(person.password, salt);

    //Override the plain password with the hashed one
    person.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

personSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

// Create person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;

//hash mehtod will convert the password to hash with salt and then compare the enterd password like this it will add salt to the entered password and check that this result is same to the acutual password with salt or not
