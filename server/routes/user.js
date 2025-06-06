const express = require('express');
const { handleSignUp, handleLogin, handleLogOut } = require('../controllers/user');
const { handleCheckAuth } = require('../controllers/authController');
const router = express.Router();


router.post('/signUp',handleSignUp);
router.post('/login', handleLogin);
router.post('/logout', handleLogOut);
router.get('/me', handleCheckAuth, (req, res) => {
  res.status(200).json({ user: req.user });
});


module.exports = router;