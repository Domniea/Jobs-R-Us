import React, { useContext, useEffect } from "react";
import JobUserPost from "./JobUserPost";
import { JobContext } from "../../context/JobProvider";


function JobListUserPosted(props) {

    const {
        usersJobsPosted
    } = useContext(JobContext)

    const job = usersJobsPosted.map(j => {
        return <JobUserPost
            key={j._id}
            {...j}
        />
    })

    return (
        <div className="profile--postedList">
            <h2>Posted Jobs</h2>
            { job }
        </div>
    )
}

export default JobListUserPosted