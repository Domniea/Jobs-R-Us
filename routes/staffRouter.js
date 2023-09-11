const express = require('express')
const staffRouter = express.Router()
const User = require('../models/user')
const Job = require('../models/Job')

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

//Get Staff Claimed Jobs
staffRouter.get('/:userId/claimed', (req, res, next) => {
    Job.find(
        {isPending: true, workedOnBy: req.params.userId, isComplete: false},
        (err, pendingJobs) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(pendingJobs)
        }
    )
})

//Get Staff Completed Jobs
staffRouter.get('/:userId/completed', (req, res, next) => {
    Job.find(
        { completedBy: req.params.userId, isComplete: true},
        (err, completedJobs) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(completedJobs)
        }
    )
})


//Cancel Job
staffRouter.put('/:jobId/cancel', (req, res, next) => {
    Job.findOneAndUpdate(
        {_id: req.params.jobId},
        {isPending: false, workedOnBy: '000000000000000000000000'},
        {new: true},
        (err, user) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(user)
        }
    )
})


//Get Total Earned
staffRouter.get('/:userId/paytotal', (req, res, next) => {
    Job.find(
        { completedBy: req.params.userId },
        (err, totalPay) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(totalPay)
        }
    )
})


module.exports = staffRouter