const {Router} = require("express");
/* const controller = require("../controllers/controller") */
//const {home} = require("../views/index");

const signup = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

/* index.get("/", (req, res) => {
  res.render("index", { links: links });
}); */
signup.get("/", (req, res)=> res.render("signup", {message: "SIGN-UP PAGE!"}));

module.exports = signup;