const {Router} = require("express");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const controller = require("../controllers/controller");
//const {home} = require("../views/index");

const login = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "signup", text: "Sign-Up" },
];

const title = "LOGIN PAGE";

login.get("/", (req, res)=> res.render("login", { links: links, title: title}));
login.get("/seeUsers",controller.seeUsers);
login.get("/createUser",controller.createUser);
login.get("/deleteAll",controller.deleteAll);

login.post("/", passport.authenticate("local",{
    successRedirect: "/",
    failureRedirect: "/"
})); 

module.exports = login;