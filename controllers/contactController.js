const asyncHandler = require("express-async-handler");

//description for get all contact
// route for GET /api/contacts
// access to the api as public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

// route for POST /api/contacts
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  res.status(201).json({ message: "Create contacts" });
});

// route for PUT /api/contacts
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

// route for PUT /api/contacts
const getContactforID = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

// route for PUT /api/contacts
const deleteContactforID = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  updateContact,
  getContactforID,
  deleteContactforID,
};

//by using async-handler we don't need to use try catch, whenerver an exception occur async-handler will automatically pass it to error handler
