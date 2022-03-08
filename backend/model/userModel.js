const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: [true, 'please enter a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    password: {
        type: 'string',
        required: [true, 'please enter a password']
    },
},
{
    timestamps: true
}
)

module.exports = mongoose.model('User', userSchema)