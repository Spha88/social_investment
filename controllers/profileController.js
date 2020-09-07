const { body, validationResult } = require('express-validator');
const async = require('async');
const moment = require('moment');

const User = require('../models/userModel');
const Loan = require('../models/loanModel');
const { json } = require('express');

exports.getProfile = (req, res, next) => {
    async.parallel({
        profile: callback => User.findById(req.user._id).select('-password').exec(callback),
        loan: callback => Loan.findOne({ applicant: req.user._id }).exec(callback)
    }, (err, results) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ error: 'Error could not get profile and loan details' });
        }
        res.json({ user: results.profile, loan: results.loan });
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