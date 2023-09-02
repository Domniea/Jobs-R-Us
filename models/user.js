const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    memberStartDate: {
        type: Date,
        default: Date.now
    },
    isStaff: {
        type: Boolean,
        default: false

    },
    isManager: {
        type: Boolean,
        default: false
    },
    isSuper: {
        type: Boolean,
        default: false
    }
})

//Encrypt password
userSchema.pre('save', function(next) {
    const user = this
    if(!user.isModified('password')) {
        return next()
    }
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) {
            return next(err)
        }
        user.password = hash
        return next()
    })
})

//Validate encrypted password
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) {
            callback(err)
        }
        return callback(null, isMatch)
    })
    // res.send('works')
}

module.exports = mongoose.model('User', userSchema)