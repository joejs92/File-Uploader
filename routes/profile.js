const {Router} = require("express");
//const controller = require("../controllers/upload")

const profile = Router();

const title = "Profile";

profile.get("/", (req, res)=> res.render("profile", { title: title, user: req.user }));

module.exports = profile;