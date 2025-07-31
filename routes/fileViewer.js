const {Router} = require("express");
const controller = require("../controllers/controller")

const fileViewer = Router();

const links = [
  { href: "/profile", text: "Profile" },
  { href: "logout", text: "Log Out" }
];
//for some reason, the link to profile doesn't work without the slash in front
const title = "File Viewer";

async function folderMiddleware(req, res, next){
  req.folder = await controller.getSpecificFolder(req, res);
  console.log(req.folder);
  next();
}

fileViewer.get("/:folderId", folderMiddleware, (req, res)=> res.render("fileViewer", { links: links, title: req.folder.foldername, user: req.user, folder: req.folder}));

module.exports = fileViewer;