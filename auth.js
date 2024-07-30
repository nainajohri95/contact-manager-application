const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/person");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    //done is a callback function
    // authentication logic here
    try {
      console.log("Received Credentials:", username, password);
      const user = await Person.findOne({ username: username }); //checking that username in person model is matching with the username pased in the middleware
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      const isPasswordMatch = user.password === password ? true : false;

      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect Password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport; //Expoert configured passport
