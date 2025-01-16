const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const profileController = require("../controllers/profile");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const upload = require("../middleware/multer");

//Main Routes - simplified for now
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/organization", ensureAuth, postsController.getOrganization);

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.get("/", homeController.getIndex);
router.get("/faqs", homeController.getFaqs);
router.get("/about", homeController.getAbout);

router.post("/update-about", profileController.postUpdateAbout);
router.post("/update-image", upload.single("file"), profileController.postUpdateImage);

module.exports = router;
