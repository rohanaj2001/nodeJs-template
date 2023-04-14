var express = require('express');
var router = express.Router();
const test = require('../controllers/test/index');
const auth = require('./auth');

router.use('/health', test.health);
router.use('/auth', auth);
module.exports = router;