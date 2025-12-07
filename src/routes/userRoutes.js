const express = require('express');
const router = express.Router();

// Login Route
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Dummy validation (for now)
    if (email === 'test@example.com' && password === '1234') {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Register Route
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // You can connect with MongoDB here
    res.send('User registered successfully!');
});

module.exports = router;
