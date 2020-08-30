const { body, validationResult } = require('express-validator');
const async = require('async');
const moment = require('moment');

const User = require('../models/userModel');
const { json } = require('express');

exports.getProfile = (req, res, next) => {
    User.findById(req.user._id, (err, user) => {
        if (err) { return res.json({ error: 'Error fetching user data' }) };
        if (!user) { return res.json({ error: 'User does not exist' }) }
        res.json({ user: user });
    })
}

exports.getEditProfile = (req, res, next) => {
    res.send('NYI: Get profile for editing purposes');
}

exports.updateProfile = (req, res, next) => {
    console.log(req.body);
    console.log('User: ', req.user);
    User.findByIdAndUpdate(req.user._id, req.body, { new: true }, (err, user) => {
        if (err) return next(err);
        if (!user) { return json({ error: 'No user found to edit' }) };
        res.json({ profile: user });
    })
}