const Loan = require('../models/loanModel');

exports.getLoans = (req, res) => {
    res.send('loans home route');
}

exports.createLoan = (req, res) => {
    res.send('Adds new loan to database')
}

exports.getLoan = (req, res) => {
    res.send('Show info about one loan ID: ' + req.params.id);
}

exports.getLoanDataForEditing = (req, res) => {
    res.send('Respond with loan data for loan to be edited');
}

exports.updateLoan = (req, res) => {
    res.send('Update loan data. ID: ' + req.params.id);
}

exports.deleteLoan = (req, res) => {
    res.send('Delete loan that has not been approved. ID ' + req.params.id)
}