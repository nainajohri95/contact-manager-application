//description for get all contact
// route for GET /api/contacts
// access to the api as public
const getContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

// route for POST /api/contacts
const createContact = (req, res) => {
  res.status(201).json({ message: "Create contacts" });
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
};

// route for PUT /api/contacts
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

// route for PUT /api/contacts
const getContactforID = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

// route for PUT /api/contacts
const deleteContactforID = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  updateContact,
  getContactforID,
  deleteContactforID,
};
