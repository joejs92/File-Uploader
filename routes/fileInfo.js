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
  console.log(req.folder);
  next();
}

fileInfo.get("/:folderId", (req, res)=> res.render("fileInfo", { links: links, title: title, user: req.user}));

module.exports = fileInfo;