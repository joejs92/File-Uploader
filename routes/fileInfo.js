const {Router} = require("express");
const controller = require("../controllers/controller")

const fileInfo = Router();

const links = [
  { href: "/profile", text: "Profile" },
  { href: "/fileViewer", text: "Folder" },
  { href: "logout", text: "Log Out" }
];
//for some reason, the link to profile doesn't work without the slash in front
const title = "File Info";

async function folderMiddleware(req, res, next){
  req.folder = await controller.getSpecificFolder(req, res);
  req.file = await controller.getSpecificFile(req, res, next);
  links[1].href = `/fileViewer/${req.params.folderId}`
  next();
}

fileInfo.get("/:folderId/:fileId", folderMiddleware, (req, res)=> res.render("fileInfo", { links: links, title: title, user: req.user, folder: req.folder, file: req.file}));

module.exports = fileInfo;