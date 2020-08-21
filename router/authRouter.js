const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// By requiring this module here all the code in it will be executed;
const passportService = require('../utilities/passport');

/**
 *  Uses the local strategy to check if the user has an account/is registered
 *  If user is not registered, returns status 401 Unauthorized
 *  If user has an account, calls the next middleware;
 */
const SignIn = passport.authenticate('local', { session: false });

/**
 *  Uses the Jwt Strategy:
 *  Looks for the Token in the header of the request
 *  if token found, extracts the payload of the token and checks if the user
 *  exists in the data, if token is not expired and user exists authenticates 
 *  otherwise returns not authorized;
 */
const requireAuth = passport.authenticate('jwt', { session: false });


// ROUTES FOR AUTHENTICATION;
router.post('/signup', authController.authSignup);

router.post('/signin', SignIn, authController.authSignin);

router.get('/data', requireAuth, (req, res) => {
    res.send('This is a protected route');
})

module.exports = router;
