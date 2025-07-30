const {Router} = require("express");
const controller = require("../controllers/controller")
//const {home} = require("../views/index");

const editFolderName = Router();

const links = [
  { href: "/profile", text: "Profile" },
  { href: "logout", text: "Log out" },
];

const title = "Edit Folder Name";

async function folderMiddleware(req, res, next){
  req.folders = await controller.getFolders(req, res);
  next();
}

editFolderName.get("/", folderMiddleware,(req, res)=> res.render("editFolderName", {title: title, links: links, user: req.user, folders: req.folders}));
//editFolderName.post("/", controller.postSignup);

module.exports = editFolderName;