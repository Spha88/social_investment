const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/signup', (req, res, next) => {
    console.log(req.body);
    User.findOne({ email: req.body.email }, (err, existingUser) => {
        if (err) return next(err);

        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        const user = new User({
            email: req.body.email,
            password: req.body.password,
        });

        user.save(err => {
            if (err) { return res.json({ error: 'could not save user' }); }
            res.status(200).json({ success: 'User saved' });
        });
    });
});

module.exports = router;
