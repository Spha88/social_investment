const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    loan: { type: Schema.Types.ObjectId, ref: 'Loan', required: true },
    client: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    interest: { type: Number, required: true, required: true },
    date: { type: Date, default: Date.now },
    accepted: { type: Boolean, default: false }
})

module.exports = mongoose.model('Offer', offerSchema);