import React, {useState, useEffect, useContext} from "react";
import JobAll from "./JobAll.jsx";
import { JobContext } from "../../context/JobProvider.jsx";
import { UserContext } from "../../context/UserProvider.jsx";
import { StaffContext } from "../../context/StaffProvider.jsx";


function JobList(props) {
    const {
        allJobs,
        setAllJobs,
        getAllJobs
    } = useContext(JobContext)

    const {
        user: {
            _id
        }
    } = useContext(UserContext)

    const {
        claimedJobs
    } = useContext(StaffContext)

    useEffect(() => {
        getAllJobs()
    }, [claimedJobs])


    const job = allJobs.map(j => {
        return <JobAll
        key={j._id}
        {...j}
        userId={_id}

        />
    })

    return (
        <div className="JobList jobList">
            {job}
        </div>
    )
}

export default JobList