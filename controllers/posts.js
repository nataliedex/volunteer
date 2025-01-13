const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const axios = require("axios");
const createAPIClient = require("../middleware/apiConfig");


module.exports = {

  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  
  chatWithAI: async (req, res) => {
    try {
      const userMessage = req.body.message;
      const apiClient = createAPIClient();

      const response = await apiClient.post("", {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant for users on this platform." },
          { role: "user", content: userMessage },
        ],
      });

      const aiResponse = response.data.choices[0].message.content;
      res.json({ reply: aiResponse });
    } catch (err) {
      console.error("Error interacting with AI API:", {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
      });
      res.status(500).send("An error occurred with the AI service.");
    }
  },
};
      
