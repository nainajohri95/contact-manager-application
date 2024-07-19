const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  updateContact,
  getContactforID,
  deleteContactforID,
} = require("../controllers/contactController");

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").put(updateContact);

router.route("/:id").get(getContactforID);

router.route("/:id").delete(deleteContactforID);

//expoerting
module.exports = router;
