const {Router} = require("express");
/* const controller = require("../controllers/controller") */
//const {home} = require("../views/index");

const index = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

/* index.get("/", (req, res) => {
  res.render("index", { links: links });
}); */
index.get("/", (req, res)=> res.render("index", {message: "LANDING PAGE!"}));

module.exports = index;