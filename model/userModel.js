const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 10,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    age: {
        type: number,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: 'Age must be a positive integer'
        }
    }, timestamps: true
})

const User = new mongoose.model("User", userSchema)
module.exports = User