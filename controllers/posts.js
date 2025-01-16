// const Post = require("../models/Post");
// const User = require("../models/User");
// const Organization = require("../models/Organization");


module.exports = {

  getProfile: async (req, res) => {
    try {
      console.log("User data:", req.user);
      res.render("profile.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getOrganization: async (req, res) => {
    try {
      console.log("User data:", req.user);
      res.render("organization.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
      
