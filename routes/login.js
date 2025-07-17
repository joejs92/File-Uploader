const {Router} = require("express");
/* const controller = require("../controllers/controller") */
//const {home} = require("../views/index");

const login = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "signup", text: "Sign-Up" },
];

/* index.get("/", (req, res) => {
  res.render("index", { links: links });
}); */
login.get("/", (req, res)=> res.render("login", { links: links }));

module.exports = login;