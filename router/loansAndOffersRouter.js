const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const offerController = require('../controllers/offerController');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

router.use(requireAuth);

// INDEX
// URL: GET - /loans
// Description: Display all loans
router.get('/', loanController.getLoans);

// CREATE
// URL: POST - /loans
// Add new loan to database
router.post('/', loanController.createLoan);


// SHOW
// URL: GET - /loans/:id
// Description: Show info about a loan
router.get('/:id', loanController.getLoan);

// EDIT
// URL: GET - /loans/:id/edit
// Desc: Send loan data for loan to be edited ('I don't think I will allow this');
router.get('/:id/edit', loanController.getLoanDataForEditing);


// UPDATE
// URL: PUT - /loans/:id
// Desc: Update a loan
router.put('/:id', loanController.updateLoan);


// DELETE
// URL: DELETE - /loans/:id
// Desc: Delete/cancel loan which has not yet approved
router.delete('/:id', loanController.deleteLoan);

/** LOAN OFFERS */

// GET
// URL: GET - /loans/:id/offers
// Desc: Get all offers on a particular loan
router.get('/:id/offers', offerController.getOffers);

// CREATE
// URL: POST - /loans/:id/offers
// Add new offer to a loan to a database using loan id
router.post('/:id/offers', offerController.createOffer);


// SHOW
// URL: GET - /loans/:id/offers/:offerid
// Description: Show info about an offer
router.get('/:id/offers/:offerid', offerController.getOffer);


// DELETE
// URL: DELETE - /loans/:id/offers/:offerid
// Desc: Delete/cancel offer which has not yet approved
router.delete('/:id/offers/:offerid', offerController.deleteOffer);

module.exports = router;


