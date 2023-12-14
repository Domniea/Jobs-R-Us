import React, { useState, useContext, useEffect } from "react";
import JobStaffCompleted from "./JobStaffCompleted";
import { UserContext } from "../../context/UserProvider";
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
        <div className="staff--listCompleted container">
            <h2>Completed Work</h2>
            <div>   
                {job}
            </div>
        </div>
    )
}

export default JobListStaffCompleted