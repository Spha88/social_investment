const express = require('express');
const router = express.Router();


// INDEX
// URL: GET - /loans
// Description: Display all loans
router.get('/', (req, res) => {
    res.send('loans home route')
});

// CREATE
// URL: POST - /loans
// Add new loan to database
router.post('/', (req, res) => {
    res.send('Adds new loan to database')
});


// SHOW
// URL: GET - /loans/:id
// Description: Show info about a loan
router.get('/:id', (req, res) => {
    res.send('Show info about one loan ID: ' + req.params.id);
});

// EDIT
// URL: GET - /loans/:id/edit
// Desc: Send loan data for loan to be edited ('I don't think I will allow this');
router.get('/:id/edit', (req, res) => {
    res.send('Respond with loan data for loan to be edited');
});


// UPDATE
// URL: PUT - /loans/:id
// Desc: Update a loan
router.put('/:id', (req, res) => {
    res.send('Update loan data. ID: ' + req.params.id);
});


// DELETE
// URL: DELETE - /loans/:id
// Desc: Delete/cancel loan which has not yet approved
router.delete('/:id', (req, res) => {
    res.send('Delete loan that has not been approved. ID ' + req.params.id)
})

module.exports = router;


