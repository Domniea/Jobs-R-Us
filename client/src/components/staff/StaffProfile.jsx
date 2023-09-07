import React, {useContext, useState, useEffect} from "react";
import { Link } from 'react-dom'
import StaffJobPending from "./StaffJobPending";
import JobListStaffCompleted from "./JobListStaffCompleted";
import { UserContext } from "../../context/userProvider";
import { StaffContext } from "../../context/StaffProvider";

function StaffProfile() {
    const {
        user: {
            username,
            _id
        }
    } = useContext(UserContext)

    const {
        getClaimed,
        claimedJobs,
        setClaimedJobs
    } = useContext(StaffContext)
    
    useEffect(() => {
        getClaimed(_id)
    }, [])
    
    const job = claimedJobs.map(j => {
        return <StaffJobPending
            key={j._id}
            {...j}
            userId={_id}
        />
        }
    )

    // console.log(claimedJobs)
    return (
        <div>
            <h1>Welcome {username}</h1>
            <h2>Pending Jobs</h2>
            {job}
            <div>
                <JobListStaffCompleted/>
            </div>
        </div>
    )
}

export default StaffProfile