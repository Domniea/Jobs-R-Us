import React, {useContext, useState, useEffect} from "react";
import StaffJobPending from "./StaffJobPending";
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

    console.log(claimedJobs)
    return (
        <div>
            <h1>Staff Profile</h1>
            {job}
        </div>
    )
}

export default StaffProfile