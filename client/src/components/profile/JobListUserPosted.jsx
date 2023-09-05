import React, { useContext, useEffect } from "react";
import JobUserPost from "./JobUserPost";
import { JobContext } from "../../context/JobProvider";


function JobListUserPosted(props) {

    const {
        usersJobsPosted,
        getUsersJobsPosted,
        deleteJob
    } = useContext(JobContext)

    const {
        _id
    } = props

    let pendingJobs = []

    useEffect(() => {
        getUsersJobsPosted(_id)
    }, [])

    const job = usersJobsPosted.map(j => {
        return <JobUserPost
            key={j._id}
            {...j}
            deleteJob={deleteJob}
        />
    })

 

    return (
        <div className="jobList">
            <h1>Posted Jobs</h1>
            { job }
        </div>
    )
}

export default JobListUserPosted