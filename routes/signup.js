const {Router} = require("express");
/* const controller = require("../controllers/controller") */
//const {home} = require("../views/index");

const signup = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "login", text: "Login" },
];

/* index.get("/", (req, res) => {
  res.render("index", { links: links });
}); */
signup.get("/", (req, res)=> res.render("signup", { links: links }));

module.exports = signup;