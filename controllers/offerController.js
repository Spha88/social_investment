const Offer = require('../models/offerModel');
const Loan = require('../models/loanModel');

// Get all offers for a loan
exports.getOffers = (req, res) => {
    Offer.find({ loan: req.params.id }, (err, offers) => {
        if (err) return res.status(500).json({ error: "Could not find offers" });

        if (!offers.length) return res.status(400).json({ error: "Could not find offers" });

        res.status(200).json(offers);
    })
}

// Create or add offer to a loan
exports.createOffer = (req, res) => {
    const offer = new Offer({
        interest: req.body.interest,
        client: req.body.client,
        loan: req.params.id
    });

    // add offer to loan
    Loan.findOneAndUpdate({ _id: req.params.id }, { $push: { offers: offer } }, { new: true }, (err, doc) => {
        if (err) return res.json({ error: "Could not add offer to the loan" });

        // Save offer to database
        offer.save(err => {
            if (err) return res.status(500).json({ error: "Could not add offer" });

            // return updated loan
            Loan.findById(req.params.id).populate('offers').exec((err, loan) => {
                if (err) return res.json({ error: 'could not get updated loan please refresh page' });

                res.status(200).json({ loan });
            })
        });
    });
}

// Get one offer info
exports.getOffer = (req, res) => {
    Offer.findById(req.params.offerid, (err, offer) => {
        if (err) return res.status(500).json({ error: "Could not find offer" });

        if (!offer) return res.status(400).json({ error: "No offer found with that id" });

        res.json({ offer })
    })
}

// Delete an offer
exports.deleteOffer = (req, res) => {
    res.send('NYI: Delete offer that has not been approved. ID ' + req.params.offerid);
}