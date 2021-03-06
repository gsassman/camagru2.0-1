const express = require('express');
const router = express.Router();

//Controllers
const authenticationController = require('../controllers/authentication');

// Welcome page
router.get('/', (req, res) => res.render('welcome'));

// Login page
router.get('/login', authenticationController.getLogin);

// Register page
router.get('/register', authenticationController.getRegister);

// Register Handle
router.post('/register', authenticationController.postRegister);

// Login Handle 
router.post('/login', authenticationController.postLogin);

// Verify email page
router.get('/verify', authenticationController.getVerify);

// Forgot password page - send email
router.get('/forgot-password', authenticationController.getForgotPassword);

// Forgot password handle
router.post('/forgot-password', authenticationController.postForgotPassword);

// New password page (after being given a temp password in email)
router.get('/new-password', authenticationController.getNewPassword);

// New password handle
router.post('/new-password', authenticationController.postNewPassword);

// Dashboard page
// router.get('/dashboard', ensureAuthenticated, (req, res) => 
//     res.render('dashboard', {
//         userName: req.user.name
//     })
// );

module.exports = router;