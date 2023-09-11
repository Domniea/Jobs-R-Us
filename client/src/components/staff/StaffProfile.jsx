import React, {useContext, useState, useEffect} from "react";
import StaffListPending from "./StaffListPending";
import JobListStaffCompleted from "./JobListStaffCompleted";
import Payment from "./Payment";
import { UserContext } from "../../context/userProvider";


function StaffProfile() {
    const {
        user: {
            username,
            _id
        }
    } = useContext(UserContext)

    // const {
    //     getClaimed,
    //     claimedJobs,
    //     setClaimedJobs
    // } = useContext(StaffContext)
    
    // useEffect(() => {
    //     getClaimed(_id)
    // }, [])
    
    // const job = claimedJobs.map(j => {
    //     return <StaffJobPending
    //         key={j._id}
    //         {...j}
    //         userId={_id}
    //     />
    //     }
    // )

    // console.log(claimedJobs)
    return (
        <div>
            <h1>Welcome {username[0].toUpperCase() + username.slice(1)}</h1>
            <StaffListPending />
            {/* {job} */}
            <div className="staffCompleted--container container-complete-payment">
                <JobListStaffCompleted/>
                <Payment />
            </div>
        </div>
    )
}

export default StaffProfile