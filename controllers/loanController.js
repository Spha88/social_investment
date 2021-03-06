const { body, validationResult } = require('express-validator');
const async = require('async');
const moment = require('moment');

const Loan = require('../models/loanModel');
const LoanCalculator = require('../utilities/LoanCalculator');



// Find all loans
exports.getLoans = (req, res, next) => {
    Loan.find().populate('offers').exec((err, loans) => {
        if (err) return res.status(500).json({ error: "Could not get loans" });

        // No loans found
        if (!loans.length) return res.json({ loans: "No loans have been added yet" });

        res.json({ loans: loans });
    });
}

// Create new loan
exports.createLoan = [
    /** 
     * Validate none of the fields are empty
     * and that they are numbers. 
     */
    body('amount')
        .notEmpty().withMessage('Amount should not be empty')
        .isInt().withMessage('Amount must be an integer'),
    body('term')
        .notEmpty().withMessage('Term should not be empty')
        .isInt().withMessage('Term should be a number with no decimal'),

    (req, res) => {

        // Check for errors in the above code
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // If no errors create a Loan and save to DB
        const calculated = new LoanCalculator(req.body.amount, req.body.term, 0.10);

        const loan = new Loan({
            amount: req.body.amount,
            interest: 0.10,
            term: req.body.term,
            applicant: req.user._id
        })

        console.log(loan);
        console.log(req.user);

        loan.save(err => {

            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Could Not Complete Loan Application" })
            };

            res.status(200).json({ message: 'Loan application complete' });
        })

    }

]
exports.getLoan = (req, res) => {
    Loan.findById(req.params.id).populate('offers').exec((err, loan) => {
        if (err) return res.status(500).json({ error: 'Could not get a loan with id' });

        if (!loan) return res.status(400).json({ error: 'No loan was found' })

        res.json({ loan });
    })

}

exports.getLoanDataForEditing = (req, res) => {
    Loan.findById(req.params.id, (err, loan) => {
        if (err) return res.status(500).json({ error: 'Could not get a loan with id' });
        if (!loan) return res.status(400).json({ error: 'No loan was found' })
        res.json({ loan });
    })
}

exports.updateLoan = (req, res) => {

    console.log(req.body);

    const updateLoan = { ...req.body }

    Loan.findByIdAndUpdate(req.params.id, updateLoan, { new: true }, (err, loan) => {
        if (err) return res.json({ error: "Could not update loan" });

        // No loan was found
        if (!loan) return res.json({ error: "Loan does not exist." })

        // Return updated loan
        res.json({ loan });
    })
}

// Loan should not be deleted, they should be paid up and remain in the database;
exports.deleteLoan = (req, res) => {
    res.send('Delete loan that has not been approved. ID ' + req.params.id);
}