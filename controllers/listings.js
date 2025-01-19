const Listing = require("../models/Listing");
const fs = require("fs");
const cloudinary = require("../middleware/cloudinary");

module.exports = {

  getListing: async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
      console.log("listing:", listing);
      res.render("listing.ejs", { listing : listing, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  createListing: async (req, res) => {
    try {
      await Listing.create({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        location: req.body.location,
        volunteers: {},
        organization: req.user.organizationId,
        user: req.user.organization,
        image: req.user.image,
      });
      console.log("Listing has been added!");
      res.redirect("/organization");
    } catch (err) {
      console.log(err);
    }
  },

  SignUpListing: async (req, res) => {
    try {
      res.render("listing.ejs");
    } catch (err) {
      console.log(err);
    }
  },

  deleteListing: async (req, res) => {
    try {
      // Find listing by id
      let listing = await Listing.findById({ _id: req.params.id });
      // Delete post from db
      await Listing.remove({ _id: req.params.id });
      console.log("Deleted Listing");
      res.redirect("/organization");
    } catch (err) {
      res.redirect("/organization");
    }
  },

};
      
