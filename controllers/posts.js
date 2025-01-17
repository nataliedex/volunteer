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
      res.render("organization.ejs", { user: req.user });
      console.log(req.user);
    } catch (err) {
      console.log(err);
    }
  },
};
      
