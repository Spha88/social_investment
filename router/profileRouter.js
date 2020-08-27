const express = require('express');
const profileController = require('../controllers/profileController');
const router = express.Router();

// INDEX
// URL: GET - /profile
// Description: Display all loans
router.get('/', profileController.getProfile);


// EDIT
// URL GET - /profile/:id/edit
// Desc: get user profile data to populate the edit form before editing
router.get('/profile/:id/edit', profileController.getEditProfile);


// UPDATE
// URL: PUT - /profile/:id
// Desc: handles for data to update user profile
router.put('/profile/:id', profileController.updateProfile);


module.exports = router;