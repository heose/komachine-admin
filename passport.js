const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: '2100952049991579',
      clientSecret: '12396680c99e8669bbf915fbe71eec4b',
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      return done(null);
    },
  ),
);

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: '136758333281-sl43ob96tu44qeemdkh0evu3miavgfs2.apps.googleusercontent.com',
      clientSecret: 'YrhMIgGANcibbcZe210DlIGH',
      callbackURL: 'http://localhost:3000/auth/google',
    },
    (accessToken, refreshToken, profile, done) => {
      done(null);
    },
  ),
);
module.exports = passport;
