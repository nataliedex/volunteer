exports.getOrganization = async (req, res) => {
    try {
      res.render("organization.ejs", { user: req.user });
      console.log(req.user);
    } catch (err) {
      console.log(err);
    }
  };