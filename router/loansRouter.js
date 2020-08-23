const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');


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

module.exports = router;


