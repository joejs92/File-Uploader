const {Router} = require("express");
const controller = require("../controllers/upload")

const uploadFiles = Router();

const title = "Upload Files";

uploadFiles.get("/", (req, res)=> res.render("uploadFiles", { title: title, user: req.user }));

uploadFiles.post("/", controller.single('file'),(req, res)=> res.render("uploadFiles", { title: title, user: req.user }));


module.exports = uploadFiles;