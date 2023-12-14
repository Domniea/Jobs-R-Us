import React, { useState, useContext, useEffect } from "react";
import JobUserCompleted from "./JobUserCompleted";
import { JobContext } from "../../context/JobProvider";

function JobListUserCompleted(props) {
    const {
        usersJobsCompleted,
        getUsersJobsCompleted
    } = useContext(JobContext)

    const {
        _id
    } = props

    useEffect(() => {
        getUsersJobsCompleted(_id)
    }, [])
    
    console.log(usersJobsCompleted)
    const job = usersJobsCompleted.map(j => {
        return <JobUserCompleted 
            key={j._id}
            {...j}
        />
    }) 

    return (
        <div className="profile--completedList">
            <h1>Completed Work</h1>
            { job }
        </div>
    )
}

export default JobListUserCompleted