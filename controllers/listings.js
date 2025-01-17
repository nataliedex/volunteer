const Listing = require("../models/Listing");
const fs = require("fs");
const cloudinary = require("../middleware/cloudinary");

module.exports = {

  getListing: async (req, res) => {
    try {
      const listing = await Listing.find({user: req.user.id});
      console.log("Listing data:", listing);
      res.render("organization.ejs", { user: req.user, listing:listing });
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
        likes: 0,
        organization: req.user.organizationId,
      });
      console.log("Listing has been added!");
      res.redirect("/organization");
      // const updatedListings = await Listing.find( { organization: req.user.organizationId });
      // res.render("organization.ejs", { user:req.user, listing: updatedListings });
    } catch (err) {
      console.log(err);
    }
  },

  likeListing: async (req, res) => {
    try {
      res.render("listing.ejs");
    } catch (err) {
      console.log(err);
    }
  },

  deleteListing: async (req, res) => {
    try {
      res.render("listing.ejs");
    } catch (err) {
      console.log(err);
    }
  },

};
      
