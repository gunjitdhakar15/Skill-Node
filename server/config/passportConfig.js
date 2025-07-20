const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const dotenv = require("dotenv");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require("../models/user");
dotenv.config();

const filterJson = (obj, unwantedKeys) => {
  const filteredObj = {};
  Object.keys(obj).forEach((key) => {
    if (unwantedKeys.indexOf(key) === -1) {
      filteredObj[key] = obj[key];
    }
  });
  return filteredObj;
};

passport.use(
  new Strategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    async (req, email, password, done, res) => {
      try {
        const user = await User.findOne({ email: email });

        if (!user) {
          return done(null, false, {
            message: "User does not exist",
          });
        }

        await user.login(password);
        user["_doc"] = filterJson(user["_doc"], ["password", "__v"]);
        return done(null, user);
      } catch (err) {
        return done(err, false, {
          message: "Error while authenticating user.",
        });
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload._id);

        if (!user) {
          return done(null, false, {
            message: "JWT Token does not exist",
          });
        }

        user["_doc"] = filterJson(user["_doc"], ["password", "__v"]);
        return done(null, user);
      } catch (err) {
        return done(err, false, {
          message: "Incorrect Token",
        });
      }
    }
  )
);

module.exports = passport;
