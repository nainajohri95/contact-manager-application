const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

//Post API to give the MenuItem
router.post("/", async (req, res) => {
  try {
    const item = req.body; //Assuming the request body contains the item

    //create a new Person document using the Mongoose model
    const newitem = new MenuItem(item);

    //save the new person to the database
    const response = await newitem.save();
    console.log("item saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//GET mehtod to get the MenuItem
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Items fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
