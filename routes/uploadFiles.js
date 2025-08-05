const {Router} = require("express");
const controller = require("../controllers/upload")
const controller2 = require("../controllers/controller")

const uploadFiles = Router();

const title = "Upload Files";

const links = [
  { href: "/profile", text: "Profile" },
  { href: "/fileViewer", text: "Folder" },
  { href: "logout", text: "Log Out" }
];

async function folderMiddleware(req, res, next){
  req.folder = await controller2.getSpecificFolder(req, res);
  links[1].href = `/fileViewer/${req.params.folderId}`
  next();
}

async function addFileMiddleware(req, res, next){
  await controller2.postFile(req, res);
  //next(); 
}

uploadFiles.get("/:folderId",folderMiddleware ,(req, res)=> res.render("uploadFiles", { title: title, links: links, user: req.user, folder: req.folder }));
uploadFiles.get("/:folderId/seeAllFiles", controller2.seeAllFiles);
uploadFiles.get("/:folderId/deleteAllFiles", controller2.deleteAllFiles);

//uploadFiles.post("/", controller.single('file'),(req, res)=> res.render("uploadFiles", { title: title, links: links, user: req.user, folder: req.folder }));
uploadFiles.post("/:folderId", controller.single('file'),addFileMiddleware,folderMiddleware,(req, res)=> res.render("profile", { title: title, links: links, user: req.user, folder: req.folder}));


module.exports = uploadFiles; 