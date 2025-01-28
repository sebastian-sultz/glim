const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization']; // Get the 'Authorization' header
    if (!authHeader) {
        return res.status(403).json({ message: 'Unauthorized, JWT token is required' });
    }

    // Extract token from the 'Bearer <token>' format
    const token = authHeader.split(' ')[1]; // Split the string at space and get the token part
    if (!token) {
        return res.status(403).json({ message: 'Unauthorized, JWT token is missing' });
    }

    try {
        // Verify the token and attach decoded info to the request object
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user data to the request object
        next(); // Proceed to the next middleware/route handler
    } catch (err) {
        return res.status(403).json({ message: 'Unauthorized, JWT token is wrong or expired' });
    }
};

module.exports = ensureAuthenticated;
