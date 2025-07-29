const {Router} = require("express");
const controller = require("../controllers/controller")

const createNewFolder = Router();

const links = [
  { href: "profile", text: "Profile" },
  { href: "logout", text: "Log Out" }
];

const title = "New Folder";

createNewFolder.get("/", (req, res)=> res.render("createNewFolder", { links: links, title: title, user: req.user }));
createNewFolder.get("/seeFolders", controller.seeFolders);
createNewFolder.get("/getFolders", controller.getFolders);

createNewFolder.post("/", controller.postNewFolder);

module.exports = createNewFolder;