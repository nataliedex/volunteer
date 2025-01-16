// const Post = require("../models/Post");
// const User = require("../models/User");
// const Organization = require("../models/Organization");


module.exports = {

  getProfile: async (req, res) => {
    try {
      res.render("profile.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getOrganization: async (req, res) => {
    try {
      console.log("User in getOrganization:", req.user);
      res.render("organization.ejs");
    } catch (err) {
      console.log(err);
    }
  },
};
      
