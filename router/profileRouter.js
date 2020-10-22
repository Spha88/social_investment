const express = require('express');
const passport = require('passport');
const profileController = require('../controllers/profileController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });


// must be authorized or logged in to access these routes
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
// Desc: handles form data to update user profile
router.put('/', profileController.updateProfile);


// POST
// URL: POST - /profile/document
// Desc: Upload document to the profile
router.post('/documents', upload.single('file'), profileController.uploadDocument);


module.exports = router;