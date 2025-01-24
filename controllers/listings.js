const Listing = require("../models/Listing");
const Organization = require("../models/Organization");
const User = require("../models/User");

module.exports = {

  getListing: async (req, res) => {
    try {

      const listing = await Listing.findById(req.params.id);
      const organization = await Organization.findOne({ organization: listing.user });

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
        organization: req.user.organizationId,
        user: req.user.organization,
        image: req.user.image,
      });
      console.log("Listing has been added!");
      res.redirect("/organization#current-listings");
    } catch (err) {
      console.log(err);
    }
  },

  addVolunteer: async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId);
      
      await Listing.findByIdAndUpdate(
        req.params.id, 
        { 
          $push: {
            volunteers: {
              name: `${user.firstName} ${user.lastName}`,
              email: user.email,
            },
          },
        } 
      );
          console.log("Volunteer added to the listing");
          res.redirect("/profile#volunteer-schedule");


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

  removeVolunteer: async (req, res) => {
    try {
      const { name, email } = req.body;
      const { id } = req.params;

      await Listing.findByIdAndUpdate(
        { _id: id },
        { $pull: { volunteers: { name : name, email: email } } },
        { new: true },
      );
      
      console.log("Deleted volunteer");
      res.redirect("/profile");
    } catch (err) {
      console.error("Volunteer not deleted", err);
      res.redirect("/profile");
    }
  },

  updateListing: async (req, res) => {
    try{
      const { description, location, date } = req.body;
      const updatedListing = await Listing.findOneAndUpdate(
        { _id: req.params.id },
        { description, location, date },
        { new: true }
      );
      res.redirect(`/listing/${req.params.id}`);
    } catch (err) {
      console.error("Error updating listing", err);
      res.status(500).send("Server Error");
    }
  },

};


      
