const express = require("express");
const router = express.Router();
const listingsController = require("../controllers/listings");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Listing Routes - simplified for now
router.get("/:id", ensureAuth, listingsController.getListing);
router.post("/createListing", listingsController.createListing);
router.post("/updateListing/:id", listingsController.updateListing);
router.get("/signUpListing/:id", ensureAuth, listingsController.getSignUpListing);
router.post("/addVolunteer/:id", listingsController.addVolunteer);
router.delete("/removeVolunteer/:id", listingsController.removeVolunteer);
router.delete("/deleteListing/:id", listingsController.deleteListing);

module.exports = router;


