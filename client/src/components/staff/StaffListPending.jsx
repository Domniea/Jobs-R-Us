import React, { useEffect, useContext } from "react";
import { Link } from 'react-dom'
import StaffJobPending from "./StaffJobPending";
import { UserContext } from "../../context/UserProvider";
import { StaffContext } from "../../context/StaffProvider";


function StaffListPending() {
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
    return (
        <div className="Staff--pendingList">
            <h2>Pending List</h2>
            {job}
        </div>
    )
}

export default StaffListPending