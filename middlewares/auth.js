const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
        // Get the token from the Authorization header
        const token = req.headers.authorization;

        if (!token) {
                // Return an error response if the token is missing
                res.status(401).json({ error: 'Authentication required' });
                return;
        }

        try {
                // Verify the token and attach the decoded payload to the request object
                const decoded = jwt.verify(token, secret);
                req.userId = decoded.userId;
                next();
        } catch (err) {
                // Return an error response if the token is invalid
                res.status(401).json({ error: 'Invalid token' });
        }
};

module.exports = authMiddleware;
