const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String], //array of string of taste
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

const MenuItem = mongoose.model("MenuTrem", menuItemSchema);
module.exports = MenuItem;
