const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const loanSchema = new Schema({
    applicant: { type: Schema.Types.ObjectId, ref: 'User' },

    amount: { type: Number, require: true },
    interest: { type: Number, require: true },

    applicationDate: { type: Date, default: Date.now },
    term: { type: Number, required: true },
    paymentDate: { type: Date },

    offers: [{ type: Schema.Types.ObjectId, ref: 'Offer' }],
    acceptedOffer: { type: Schema.Types.ObjectId, ref: 'Offer' },

    paid: { type: Boolean, default: false }
})

loanSchema.pre('save', function (next) {
    const loan = this;

    /** Calculate the payment date by add the term to the application date */
    loan.paymentDate = moment(loan.applicationDate).add(loan.term, 'M');

    next();
});

module.exports = mongoose.model('Loan', loanSchema);

