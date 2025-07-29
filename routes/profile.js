const {Router} = require("express");
const controller = require("../controllers/controller")

const profile = Router();

const links = [
  { href: "createNewFolder", text: "Create New Folder" },
  { href: "logout", text: "Log Out" }
];

const title = "Profile";

async function folderMiddleware(req, res, next){
  req.folders = await controller.getFolders(req, res);
  next();
}

profile.get("/", folderMiddleware, (req, res)=> res.render("profile", { links: links, title: title, user: req.user, folders: req.folders}));

module.exports = profile;