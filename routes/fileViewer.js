const {Router} = require("express");
const controller = require("../controllers/controller")

const fileViewer = Router();

const links = [
  { href: "/profile", text: "Profile" },
  { href: "/uploadFiles", text: "Upload Files" },
  { href: "/logout", text: "Log Out" }
];
//for some reason, the link to profile doesn't work without the slash in front

async function folderMiddleware(req, res, next){
  req.folder = await controller.getSpecificFolder(req, res);
  req.files = await controller.getFiles(req, res);
  links[1].href = `/uploadFiles/${req.params.folderId}`
  next();
}

fileViewer.get("/:folderId", folderMiddleware, (req, res)=> res.render("fileViewer", { 
  links: links, 
  title: req.folder.foldername, 
  user: req.user, 
  folder: req.folder,
  files: req.files
}));

module.exports = fileViewer;