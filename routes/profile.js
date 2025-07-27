const {Router} = require("express");
//const controller = require("../controllers/upload")

const profile = Router();

const links = [
  { href: "createNewFolder", text: "Create New Folder" },
  { href: "logout", text: "Log Out" }
];

const title = "Profile";

profile.get("/", (req, res)=> res.render("profile", { links: links, title: title, user: req.user }));

module.exports = profile;