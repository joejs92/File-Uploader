const {Router} = require("express");
const controller = require("../controllers/controller")
//const {home} = require("../views/index");

const signup = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "login", text: "Login" },
];

const title = "SIGN-UP PAGE";

signup.get("/", (req, res)=> res.render("signup", {title: title, links: links, user: req.user}));
signup.post("/", controller.postSignup);

module.exports = signup;