const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    interest: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    client: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Offer', offer);