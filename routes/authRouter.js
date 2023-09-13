const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()



//Signup
authRouter.post('/signup', (req, res, next) => {
    User.findOne(
        { username: req.body.username },
        (err, user) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            if(user) {
                res.status(403)
                return next( new Error('This username is already taken'))
            }
            const newUser = new User(req.body)
            newUser.save((err, savedUser) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                const token = jwt.sign(savedUser.hidePersonal(), process.env.SECRET)
                return res.status(200).send({ token, user: savedUser.hidePersonal() })
            })
        }
    )
})

//Login
authRouter.post('/login', (req, res, next) => {
    User.findOne(
        { username: req.body.username.toLowerCase() },
        (err, user) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            if(!user) {
                res.status(403)
                return next(new Error('No User exists'))
            }
            user.checkPassword(req.body.password, (err, isMatch) => {
                if(err) {
                    res.status(403)
                    return next(new Error('Username or Password do not Match'))
                }
                if(!isMatch) {
                    res.status(403)
                    return next(new Error('Username or Password do not Match'))
                }
                const token = jwt.sign(user.hidePersonal(), process.env.SECRET)
                return res.status(201).send({ token, user: user.hidePersonal() })
            })
        })
})

module.exports = authRouter