const {Router} = require("express");
/* const controller = require("../controllers/controller") */
//const {home} = require("../views/index");

const login = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

/* index.get("/", (req, res) => {
  res.render("index", { links: links });
}); */
login.get("/", (req, res)=> res.render("login", {message: "LOGIN PAGE!"}));

module.exports = login;