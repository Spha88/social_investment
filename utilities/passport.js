const User = require('../models/userModel');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Local Strategy Config
const localOptions = { usernameField: 'email' };
const localStrategy = new LocalStrategy(localOptions, (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
        // error looking for user
        if (err) { return done(err); }

        // Searched for user but not found.
        if (!user) { return done(null, false); }

        // User with email found, compare user password with supplied password
        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err); }
            if (!isMatch) { return done(null, false); }

            // passwords match;
            if (isMatch) {
                return done(null, user);
            }
        });
    })
});


// JWT Strategy Config
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}
const jwtStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findOne({ _id: payload.id }, (err, user) => {
        if (err) { return done(err, false); }

        if (!user) { return done(null, false); }

        return done(null, user);
    })
})


passport.use(localStrategy);
passport.use(jwtStrategy);