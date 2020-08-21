const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// JWT Generator
const generateToken = user => {
    const secret = process.env.JWT_SECRET;

    // Store user email and user id in token;
    const payload = { email: user.email, id: user._id }

    // create and return token;
    return jwt.sign(payload, secret, { expiresIn: '2h' });
}

// SignUp
exports.authSignup = (req, res, next) => {
    // Check if user exists, if not, create user
    User.findOne({ email: req.body.email }, (err, existingUser) => {
        if (err) return next(err);

        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        // Create new user from supplied credentials
        const user = new User({
            email: req.body.email,
            password: req.body.password,
        });

        // Save user
        user.save(err => {
            if (err) { return res.status(500).json({ error: 'Could not save user' }); }

            // Save successfully send a JWT token back
            res.status(200).json({ token: generateToken(user) });
        });
    });
}