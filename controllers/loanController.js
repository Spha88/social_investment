const Loan = require('../models/loanModel');
const moment = require('moment');
const { json } = require('express');
const { populate } = require('../models/loanModel');


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
exports.createLoan = (req, res) => {

    const loan = new Loan({
        amount: req.body.amount,
        interest: req.body.interest,
        term: req.body.term,
    })

    loan.save(err => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Could Not Complete Loan Application" })
        };

        res.status(200).json({ message: 'Loan application complete' });
    })

}

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