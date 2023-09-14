const express = require('express')
const jobRouter = express.Router()
const Job = require('../models/job')

//Find all Jobs
jobRouter.get('/', (req, res, next) => {
    Job.find(
        {isPending: false, isComplete: false},
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
        { user: req.params.userId, isComplete: false},
        (err, allJobs) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(allJobs)
        }
    )
})

//Find Users Pending
jobRouter.get('/:userId/pending', (req, res, next) => {
    Job.find(
        { user: req.params.userId, isPending: true, isComplete: false },
        (err, pending) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(pending)
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

//Edit Job
jobRouter.put('/:jobId/edit', (req, res, next) => {
    Job.findOneAndUpdate(
        { _id: req.params.jobId },
        req.body,
        { new: true },
        (err, editedJob) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(editedJob)
        }
    )
})

//Delete Job
jobRouter.delete(`/:jobId`, (req, res, next) => {
    Job.findOneAndDelete(
        { _id: req.params.jobId },
        (err, deletedJob) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedJob)
        }
    )
})

//Finalize Job
jobRouter.put('/:jobId/finalize', (req, res, next) => {
    Job.findOneAndUpdate(
        {_id: req.params.jobId},
        [
            {
                $set: {
                    isComplete: true,
                    completedBy: '$workedOnBy'
                }
            }
        ],
        {new: true},
        (err, finalizedJob) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(finalizedJob.workedOnBy)
        }
    )
})

//Accept Job
jobRouter.put('/:jobId', (req, res, next) => {
    // const { isPending } = req.body
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
