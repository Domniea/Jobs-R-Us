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

//Encrypt Password
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

//Validate Encrypted Password
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) {
            callback(err)
        }
        return callback(null, isMatch)
    })
}

//Remove Password From FrontEnd
userSchema.methods.hidePersonal = function(){
    const user = this.toObject()
    delete user.password
    delete user.email
    return user
}

module.exports = mongoose.model('User', userSchema)