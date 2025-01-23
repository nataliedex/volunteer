const Listing = require("../models/Listing");
const User = require("../models/User");
const Organization = require("../models/Organization");

module.exports = {
  getIndex: async (req, res) => {
    try{
      const listings = await Listing.find({});
      res.render("index.ejs", { listing: listings, user: req.user });
    } catch(err) {
      console.log(err);
      res.status(500).send("Server error");
    }
    
  },
  getAbout: (req, res) => {
    res.render("about.ejs", { section: "about"});
  },
  getFaqs: (req, res) => {
    res.render("about.ejs", { section: "faqs"});
  },

};



