const { body, validationResult } = require('express-validator');
const async = require('async');
const moment = require('moment');

const User = require('../models/userModel');

exports.getProfile = (req, res, next) => {
    res.send('NYI: Profile index route this will respond with the profile')
}

exports.getEditProfile = (req, res, next) => {
    res.send('NYI: Get profile for editing purposes');
}

exports.updateProfile = (req, res, next) => {
    res.send("NYI: Update use profile");
}