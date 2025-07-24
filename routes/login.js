const {Router} = require("express");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const controller = require("../controllers/controller");
const bcrypt = require("bcryptjs");

const login = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "signup", text: "Sign-Up" },
];

const title = "LOGIN PAGE";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await controller.getUserByUsername(username);

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      /* if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" }); 
      currently set to check 'admin' membership. */
       const match = await bcrypt.compare(password, user.password);
      if (!match) {
        // passwords do not match!
        return done(null, false, { message: "Incorrect password" })
        //*for not-test data.*
      }
      console.log("It worked!");
      return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await controller.getUserById(id);

    done(null, user);
  } catch(err) {
    done(err);
  }
});

login.get("/", (req, res)=> res.render("login", { links: links, title: title}));
login.get("/seeUsers",controller.seeUsers);
login.get("/createUser",controller.createUser);
login.get("/deleteAll",controller.deleteAll);

login.post("/", passport.authenticate("local",{
    successRedirect: "/",
    failureRedirect: "/"
}));

//login.post("/", controller.getUserByUsername);

module.exports = login;