const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


app.post('/login', async (req, res) => {
    // Get the username and password from the request body
    const { username, password } = req.body;

    try {
        // Find the user with the given username and password
        const user = await db["mainDB"].collection('users').findOne({ username });

        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                // Generate a JWT token with the user ID as the payload
                const token = jwt.sign({ userId: user._id }, secret);

                // Return the token in the response
                res.json({ token });

            } else {
                res.status(401).json({ error: 'Invalid username or password' });
                return;
            }
        } else {
            res.status(401).json({ error: 'username does not exist' });
            return;
        }

        if (!user) {
            // Return an error response if the user is not found
            res.status(401).json({ error: 'Invalid username or password' });
            return;
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;