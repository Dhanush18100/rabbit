const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// @route POST /api/subscribe
// @desc Subscribe a user to the newsletter
// @access Public

router.post('/', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Check if the email already exists
        const existingSubscriber = await Subscriber.findOne({ email });

        if (existingSubscriber) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        // Create a new subscriber
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        res.status(201).json({ message: 'Subscription successful', subscriber: newSubscriber });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router;