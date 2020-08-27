const express = require('express');
const passport = require('passport');
const profileController = require('../controllers/profileController');

const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });

router.use(requireAuth);

// INDEX
// URL: GET - /profile
// Description: Display all loans
router.get('/', profileController.getProfile);


// EDIT
// URL GET - /profile/:id/edit
// Desc: get user profile data to populate the edit form before editing
router.get('/:id/edit', profileController.getEditProfile);


// UPDATE
// URL: PUT - /profile/
// Desc: handles for data to update user profile
router.put('/', profileController.updateProfile);


module.exports = router;