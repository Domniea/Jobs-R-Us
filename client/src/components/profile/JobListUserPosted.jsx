import React, { useContext, useEffect } from "react";
import JobUserPost from "./JobUserPost";
import { JobContext } from "../../context/JobProvider";


function JobListUserPosted(props) {

    const {
        usersJobsPosted,
        deleteJob
    } = useContext(JobContext)

    const {
        _id
    } = props

    const job = usersJobsPosted.map(j => {
        return <JobUserPost
            key={j._id}
            {...j}
            deleteJob={deleteJob}
        />
    })

    return (
        <div className="jobList">
            <h2>Posted Jobs</h2>
            { job }
        </div>
    )
}

export default JobListUserPosted