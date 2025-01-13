module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getFeatures: (req, res) => {
    res.render("information.ejs", {section: "features"});
  },
  getPricing: (req, res) => {
    res.render("information.ejs", { section: "pricing"});
  },
  getFaqs: (req, res) => {
    res.render("information.ejs", { section: "faqs"});
  },
  getAbout: (req, res) => {
    res.render("information.ejs", { section: "about"});
  },
};



