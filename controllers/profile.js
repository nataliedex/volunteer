const User = require("../models/User");
const fs = require("fs");
const cloudinary = require("../middleware/cloudinary");
const Listing = require("../models/Listing");

exports.getProfile = async (req, res) => {
  try {
    const listing = await Listing.find( { organization: req.user.organizationId });
    res.render("profile.ejs", { user: req.user, listing: listing });
  } catch (err) {
    console.log(err);
  }
};


exports.postUpdateAbout = async (req, res) => {
    try {
      const userId = req.user.id;
      const { about } = req.body;
    
      await User.findByIdAndUpdate(userId, { about: about.trim()});
      res.redirect("/profile");
    } catch (err) {
      console.error("Error updating the About Me section: ", err);
      res.status(500).send("Server Error");
    }
  };
  
  exports.postUpdateImage = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        if(user.cloudinaryId){
            await cloudinary.uploader.destroy(user.cloudinaryId);
        }
    
      const result = await cloudinary.uploader.upload(req.file.path);
      const image = result.secure_url;
      const cloudinaryId = result.public_id;
    
      await User.findByIdAndUpdate(userId, { image, cloudinaryId });

      fs.unlinkSync(req.file.path);

      res.redirect("/profile");
    } catch (err) {
      console.error("Error updating the image: ", err);
      res.status(500).send("Server Error");
    }
  };
  