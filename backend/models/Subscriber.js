const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/ // Basic email validation
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Subscriber', subscriberSchema);