const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`server running on the port ${port}`);
});
