const Offer = require('../models/offerModel');

// Get all offers for a loan
exports.getOffers = (req, res) => {
    res.send('NYI: Get all offers to a loan. LoanId: ' + req.params.id);
}

// Create or add offer to a loan
exports.createOffer = (req, res) => {
    res.send('NYI: Add new offer to a loan. LoanId: ' + req.params.id);
}

// Get one offer info
exports.getOffer = (req, res) => {
    res.send('NYI: Show info about one offer. OfferId: ' + req.params.offerid + 'loan id: ' + req.params.id);
}

// Delete an offer
exports.deleteOffer = (req, res) => {
    res.send('NYI: Delete offer that has not been approved. ID ' + req.params.offerid);
}