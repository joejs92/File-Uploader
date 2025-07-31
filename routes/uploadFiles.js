const {Router} = require("express");
const controller = require("../controllers/upload")

const uploadFiles = Router();

const title = "Upload Files";

const links = [
  { href: "/profile", text: "Profile" },
  { href: "/fileViewer", text: "Folder" },
  { href: "logout", text: "Log Out" }
];

async function folderMiddleware(req, res, next){
  req.folder = await controller.getSpecificFolder(req, res);
  next();
}

uploadFiles.get("/", (req, res)=> res.render("uploadFiles", { title: title, links: links, user: req.user, folder: req.folder }));

uploadFiles.post("/", controller.single('file'),(req, res)=> res.render("uploadFiles", { title: title, links: links, user: req.user, folder: req.folder }));


module.exports = uploadFiles; 