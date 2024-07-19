const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  updateContact,
  getContactforID,
  deleteContactforID,
} = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);

router
  .route("/:id")
  .put(updateContact)
  .get(getContactforID)
  .delete(deleteContactforID);

//expoerting
module.exports = router;
