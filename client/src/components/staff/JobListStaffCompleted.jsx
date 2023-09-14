import React, { useState, useContext, useEffect } from "react";
import JobStaffCompleted from "./JobStaffCompleted";
import { UserContext } from "../../context/UserContext";
import { StaffContext } from "../../context/StaffProvider";


function JobListStaffCompleted() {
    const {
        user: {
            _id
        }
    } = useContext(UserContext)

    const {
        getCompletedJobs,
        completedJobs
    } = useContext(StaffContext)

    useEffect(() => {
        getCompletedJobs(_id)
    }, [])

   const job = completedJobs.map(j => {
    return <JobStaffCompleted
        key={j._id}
        {...j}
    />
   })
    return (
        <div className="staff--listCompleted">
            <h2>Completed Work</h2>
            {job}
        </div>
    )
}

export default JobListStaffCompleted