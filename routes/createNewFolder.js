const {Router} = require("express");
//const controller = require("../controllers/upload")

const createNewFolder = Router();

const links = [
  { href: "profile", text: "Profile" },
  { href: "logout", text: "Log Out" }
];

const title = "New Folder";

createNewFolder.get("/", (req, res)=> res.render("createNewFolder", { links: links, title: title, user: req.user }));

module.exports = createNewFolder;