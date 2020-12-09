const express = require('express');
const controller = require('../controllers/auth.controller');
const router = express.Router();


router.get('/', controller.login);
router.post('/', controller.postLogin);

module.exports = router;
