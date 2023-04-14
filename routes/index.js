var express = require('express');
var router = express.Router();
const test = require('../controllers/test/index');
const auth = require('./auth');

router.use('/health', test.health);
router.use('/auth', auth);

// Protected API endpoint
router.get('/api/data', authMiddleware, (req, res) => {
    // The user ID is attached to the request object by the auth middleware
    const userId = req.userId;

    // Fetch the user data from the database using the user ID
    const users = db.collection('users');
    const user = users.findOne({ _id: userId });

    // Return the user data in the response
    res.json({ user });
});
module.exports = router;