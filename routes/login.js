const {Router} = require("express");
/* const controller = require("../controllers/controller") */
//const {home} = require("../views/index");

const login = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "signup", text: "Sign-Up" },
];

const title = "LOGIN PAGE";

login.get("/", (req, res)=> res.render("login", { links: links, title: title}));

module.exports = login;