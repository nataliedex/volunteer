const User = require("../models/User");
const fs = require("fs");
const cloudinary = require("../middleware/cloudinary");


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
      const result = await cloudinary.uploader.upload(req.file.path);
      const userId = req.user.id;
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
  