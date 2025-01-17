const Organization = require("../models/Organization");
const fs = require("fs");
const cloudinary = require("../middleware/cloudinary");
const Listing = require("../models/Listing");

// exports.getOrganization = async (req, res) => {
//     try {
//       const listing = await Listing.find({user: req.user.id});
//       res.render("organization.ejs", { user: req.user, listing:listing });
//       console.log(req.user);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  exports.getOrganization = async (req, res) => {
    try{
      const listing = await Listing.find({ organization: req.user.organizationId });
      res.render("organization.ejs", { user: req.user, listing: listing });
    } catch (err) {
      console.error("Error fetching organization data:", err);
      res.status(500).send("An error occured while loading the organization page");
    }
  };

  exports.postUpdateAbout = async (req, res) => {
    try {
      const userId = req.user.id;
      const { about } = req.body;
    
      await Organization.findByIdAndUpdate(userId, { about: about.trim()});
      res.redirect("/organization");
    } catch (err) {
      console.error("Error updating the About section: ", err);
      res.status(500).send("Server Error");
    }
  };
  
  exports.postUpdateImage = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await Organization.findById(userId);
        if(user.cloudinaryId){
            await cloudinary.uploader.destroy(user.cloudinaryId);
        }
    
      const result = await cloudinary.uploader.upload(req.file.path);
      const image = result.secure_url;
      const cloudinaryId = result.public_id;
    
      await Organization.findByIdAndUpdate(userId, { image, cloudinaryId });

      fs.unlinkSync(req.file.path);

      res.redirect("/organization");
    } catch (err) {
      console.error("Error updating the image: ", err);
      res.status(500).send("Server Error");
    }
  };