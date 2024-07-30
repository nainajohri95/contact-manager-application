//importing
// const notes = require("./notes.js");
// var age = notes.age;
// console.log(age);

// var result = notes.addNum(age, 2);
// console.log(result);
//...................

//lodash library
// server is a person who communicate with clients(server is a computer program that is responsible for preparing and delivering data to other computres)
// express.js is one of the popular frame work that give us server

//Express.js uses lots of middleware and to use middleware we use the app.use()
//bodyParser.json() automatically pareses the JSON data from the request body and converts it into a JS object, which is then stored in the req.body

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./db");
require("dotenv").config();
const passport = require("./auth");

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json()); //res.body(to use middleware we use app.use)

//Middleware Function
const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleDateString()} Request Made to: ${req.originalUrl}`
  );
  next(); //move on to the next phase
};

const res = require("express/lib/response");

app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", function (req, res) {
  res.send("Welcome to our Hotel");
});

const personRoutes = require("./router/PersonRouter");
const menueItemRoutes = require("./router/MenuItemRouter");

app.use("/person", localAuthMiddleware, personRoutes);

app.use("/menu", menueItemRoutes);

//we access the varible in .env file like this process.env.PORT

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});

//To set the connection b/w mongobd and nodejs we need some file that is already created by mongodb(named as mongodb) but we don't use them insted of this we use mongoose
