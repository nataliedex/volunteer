module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      if(req.user.userType === "Volunteer") {
        return next();
      }
      res.redirect("/organization");
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
