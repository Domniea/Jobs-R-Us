const express = require('express')
const staffRouter = express.Router()
const User = require('../models/user')

//Get all Users
staffRouter.get('/', (req, res, next) => {
    User.find(
        (err, allUsers) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(allUsers)
        }
    )
})

//Add & Delete Staff
staffRouter.put('/:userId', (req, res, next) => {
    User.findOneAndUpdate(
        {
            _id: req.params.userId
        },
        req.body,
        { new: true },
        (err, updatedUser) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedUser)
        }
    )
})

//Search User By Email
// staffRouter.get(`/?email=${email}`, (req, res, next) => {
staffRouter.get(`/search/`, (req, res, next) => {
    const { email } = req.query
    const pattern = new RegExp(email)

    User.find(
        { email: { $regex: pattern, $options: 'i' } },
        (err, foundUser) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundUser)
        }
    )
})

module.exports = staffRouter