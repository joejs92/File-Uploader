const {Router} = require("express");
const controller = require("../controllers/controller")

const profile = Router();

const links = [
  { href: "createNewFolder", text: "Create New Folder" },
  { href: "logout", text: "Log Out" }
];

const title = "Profile";

profile.get("/", controller.getFolders);

module.exports = profile;