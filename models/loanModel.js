const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanSchema = new Schema({
    amount: { type: Number, require: true },
    interest: { type: Number, require: true },
    applicationDate: { type: Date, default: Date.now },
    term: { type: Number, required: true },
    paymentDate: { type: Date },
    applicant: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    offers: [{ type: Schema.Types.ObjectId, ref: 'Offer' }],
    acceptedOffer: { type: Schema.Types.ObjectId, ref: 'Offer' }
})

module.exports = mongoose.model('Loan', postSchema);

