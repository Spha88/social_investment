const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const postalCodeValidator = [
    validate({
        validator: 'isLength',
        arguments: [4, 4],
        message: 'Postal code should be 4 digits',
    })
];

const userSchema = new Schema({
    email: { type: String, require: true, },
    password: { type: String, require: true },
    name: { type: String },
    surname: { type: String },
    idNo: { type: Number },
    mobileNumber: { type: Number },
    address: {
        street: String,
        city: String,
        province: String,
        postalCode: { type: Number, validate: postalCodeValidator }
    },
    employment: {
        employerName: String,
        industry: String,
        statusOfEmployment: String,
        workContactNumber: String,
        grossMonthlyIncome: Number,
        netMonthlyIncome: Number,
        incomeFrequency: String,
        salaryDay: Number,
        position: String,
        timeAtCurrentEmployer: {
            years: Number,
            months: Number
        }
    },
    bankingDetails: {
        bank: String,
        accountNumber: Number,
        accountType: String,
        accountHolder: String,
    },
    active: Boolean
});

userSchema.pre('save', function (next) {
    const user = this;
    // generate a salt then run callback
    bcrypt.genSalt(10, (err, salt) => {

        if (err) { return next(err); }

        // hash/encrypt password using the generated salt
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) { return next(err); }

            // overwrite the password with the hashed password;
            user.password = hash;

            // continue to save/add user to database;
            next();
        })
    })
})

// Compare encrypted password on login
userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) { return callback(err); }

        callback(null, isMatch);
    });
}

module.exports = mongoose.model('User', userSchema);
