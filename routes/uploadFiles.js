const {Router} = require("express");
/* const controller = require("../controllers/controller") */

const uploadFiles = Router();

const title = "Upload Files";

uploadFiles.get("/", (req, res)=> res.render("uploadFiles", { title: title, user: req.user }));

module.exports = uploadFiles;