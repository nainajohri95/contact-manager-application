const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

//in-built middleware to accept the data input by user at view
app.use(express.json());

//middleware
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`server running on the port ${port}`);
});
