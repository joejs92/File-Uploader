const {Router} = require("express");
const controller = require("../controllers/controller")

const fileViewer = Router();

const links = [
  { href: "profile", text: "Profile" },
  { href: "logout", text: "Log Out" }
];

const title = "File Viewer";
/* 
async function folderMiddleware(req, res, next){
  req.folders = await controller.getFolders(req, res);
  next();
} */

fileViewer.get("/", (req, res)=> res.render("fileViewer", { links: links, title: title, user: req.user}));

module.exports = fileViewer;