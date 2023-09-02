import React, {useState, useEffect, useContext} from "react";
import JobAll from "./JobAll.jsx";
import { JobContext } from "../../context/JobProvider.jsx";
import { UserContext } from "../../context/userProvider.jsx";


function JobList(props) {
    const {
        allJobs,
        setAllJobs,
        getAllJobs
    } = useContext(JobContext)

    const { purpose } = props

    useEffect(() => {
        getAllJobs()
    }, [])



    const job = allJobs.map(j => {
        return <JobAll
        key={j._id}
        {...j}
        />
    })

    return (
        <div className="JobList jobList">
            {job}
        </div>
    )
}

export default JobList