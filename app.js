const path = require("node:path");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const index = require("./routes/index");
const login = require("./routes/login");
const logout = require("./routes/logout");
const signup = require("./routes/signup");
const uploadFiles = require("./routes/uploadFiles");
const profile = require("./routes/profile");
const createNewFolder = require("./routes/createNewFolder");
const editFolderName = require("./routes/editFolderName");
const fileViewer = require("./routes/fileViewer");
const fileInfo = require("./routes/fileInfo");
const bcrypt = require("bcryptjs");
const LocalStrategy = require('passport-local').Strategy;

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use("/", index);
app.use("/login", login);
app.use("/logout", logout);
app.use("/signup", signup);
app.use("/uploadFiles", uploadFiles);
app.use("/profile", profile);
app.use("/createNewFolder", createNewFolder);
app.use("/editFolderName", editFolderName);
app.use("/fileViewer", fileViewer);
app.use("/fileInfo", fileInfo);

module.export = bcrypt;

app.listen(3000, () => console.log("app listening on port 3000!"));