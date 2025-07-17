const {Router} = require("express");
/* const controller = require("../controllers/controller") */
//const {home} = require("../views/index");

const index = Router();

const links = [
  { href: "signup", text: "Sign-Up" },
  { href: "login", text: "Login" },
];

const title = "LANDING PAGE";

index.get("/", (req, res)=> res.render("index", { links: links, title: title }));

module.exports = index;