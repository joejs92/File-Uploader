const {Router} = require("express");
const controller = require("../controllers/controller")
//const {home} = require("../views/index");

const editFolderName = Router();

const links = [
  { href: "/profile", text: "Profile" },
  { href: "logout", text: "Log out" },
];

const title = "Edit Folder Name";

async function folderMiddleware2(req, res, next){
  req.folder = await controller.getSpecificFolder(req, res);
  next();
}



editFolderName.get("/:folderId", folderMiddleware2,(req, res)=> res.render("editFolderName", {title: title, links: links, user: req.user, folder: req.folder}));

editFolderName.post("/:folderId", controller.postNewFolderName);

module.exports = editFolderName;