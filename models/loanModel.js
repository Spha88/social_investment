const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;
const LoanCalculator = require('../utilities/LoanCalculator');

const loanSchema = new Schema({

    applicant: { type: Schema.Types.ObjectId, ref: 'User' },

    amount: { type: Number, require: true },
    interest: { type: Number, require: true },
    interestAmount: { type: Number },
    initiationFee: { type: Number },
    vat: { type: Number },
    totalRepayment: { type: Number },

    applicationDate: { type: Date, default: Date.now },
    term: { type: Number, required: true },
    paymentDate: { type: Date },

    paid: { type: Boolean, default: false }
})

loanSchema.pre('save', function (next) {
    const loan = this;
    const loanCalculations = new LoanCalculator(loan.amount, loan.term, loan.interest);

    /** Calculate the payment date by add the term to the application date */
    loan.paymentDate = moment(loan.applicationDate).add(loan.term, 'day');

    // service fees
    loan.initiationFee = loanCalculations.initiationFee();

    // vat 
    loan.vat = loanCalculations.vat();

    // interest
    loan.interestAmount = loanCalculations.interest();

    // total Amount payable
    loan.totalRepayment = loan.amount + loanCalculations.fees();

    next();
});

module.exports = mongoose.model('Loan', loanSchema);

