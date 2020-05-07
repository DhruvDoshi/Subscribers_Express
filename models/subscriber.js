const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    sunscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})
module.exports = mongoose.model('Subscriber', subscriberSchema)