const express = require('express')
const jobRouter = express.Router()
const Job = require('../models/Job')

//Find all Jobs
jobRouter.get('/', (req, res, next) => {
    Job.find(
        (err, allJobs) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(allJobs)
        }
    )
})

//Find All Users Jobs
jobRouter.get('/:userId', (req, res, next) => {
    Job.find(
        { user: req.params.userId},
        (err, allJobs) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(allJobs)
        }
    )
})

//Find Users Completed Jobs
jobRouter.get('/:userId/completed', (req, res, next) => {
    Job.find(
        {user: req.params.userId, isComplete: true },
        (err, completedJobs) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(completedJobs)
        }
    )
})

//Post Job
jobRouter.post('/:userId', (req, res, next) => {
    req.body.user = req.auth._id
    const newJob = new Job(req.body)
    newJob.save((err, savedJob) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedJob)
    })
})

//Accept Job
jobRouter.put('/:jobId', (req, res, next) => {
    Job.findOneAndUpdate(
        { _id: req.params.jobId },
        req.body,
        { new: true},
        ( err, updatedJob) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            console.log(req.body)
            return res.status(200).send(updatedJob)
        }
    )
})


module.exports = jobRouter
