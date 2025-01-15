module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getAbout: (req, res) => {
    res.render("about.ejs", { section: "about"});
  },
  getFaqs: (req, res) => {
    res.render("about.ejs", { section: "faqs"});
  },

};



