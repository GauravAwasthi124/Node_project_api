const express = require('express');
const router = express.Router();
const profileController  = require('../Controller/profile.controller');
const verifyToken = require('../Middleware/verifytoken');

router.post('/profile', verifyToken, profileController);

module.exports = router;
