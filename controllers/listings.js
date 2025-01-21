const Listing = require("../models/Listing");
const Organization = require("../models/Organization");

module.exports = {

  getListing: async (req, res) => {
    try {

      const listing = await Listing.findById(req.params.id);
      const organization = await Organization.findOne({ organization: listing.user });
      console.log("listing.user", listing.user);
      console.log("user", req.user);

      res.render("listing.ejs", { 
        listing, 
        user: req.user, 
        organization});
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


  getSignUpListing: async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
      console.log("clicked");
      res.render("volunteer-signup.ejs", { listing });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  },

  deleteListing: async (req, res) => {
    try {
      // Delete post from db
      await Listing.findByIdAndDelete({ _id: req.params.id });
      console.log("Deleted Listing");
      res.redirect("/organization");
    } catch (err) {
      console.error("listing not deleted", err);
      res.redirect("/organization");
    }
  },

};
      
