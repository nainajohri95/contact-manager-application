//importing
// const notes = require("./notes.js");
// var age = notes.age;
// console.log(age);

// var result = notes.addNum(age, 2);
// console.log(result);
//...................

// const express = require("express");
// const app = express();

// const port = 5000;

//lodash library
// server is a person who communicate with clients(server is a computer program that is responsible for preparing and delivering data to other computres)
// express.js is one of the popular frame work that give us server

//Express.js uses lots of middleware and to use middleware we use the app.use()
//bodyParser.json() automatically pareses the JSON data from the request body and converts it into a JS object, which is then stored in the req.body

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./db");

const bodyParser = require("body-parser");

//middleware
app.use(bodyParser.json()); //res.body(to use middleware we use app.use)

const Person = require("./models/person");
const MenuItem = require("./models/MenuItem");

const res = require("express/lib/response");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/menu", function (req, res) {
  res.send("Here is your menu sir");
});

app.get("/idli", (req, res) => {
  var idli_details = {
    name: "rava_idli",
    size: "10cm idli",
    is_sambhar: true,
  };
  res.send(idli_details);
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the person data

    //create a new Person document using the Mongoose model
    const newPerson = new Person(data);

    //save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//GET mehtod to get the person
app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Post API to give the MenuItem
app.post("/menuItem", async (req, res) => {
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
app.get("/menuItem", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Items fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

//To set the connection b/w mongobd and nodejs we need some file that is already created by mongodb(named as mongodb) but we don't use them insted of this we use mongoose
