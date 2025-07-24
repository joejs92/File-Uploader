const bcrypt = require("bcryptjs");
const passport = require("passport");
//const controller = require("./controller");

async function encryptPassword(password){
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

/* passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await controller.getUserByUsername(username);

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      /* if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" }); 
      currently set to check 'admin' membership. 
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
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = rows[0];

    done(null, user);
  } catch(err) {
    done(err);
  }
}); */

module.exports = encryptPassword;