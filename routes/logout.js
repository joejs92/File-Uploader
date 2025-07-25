const {Router} = require("express");

const logout = Router();

logout.get("/", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });

module.exports = logout;