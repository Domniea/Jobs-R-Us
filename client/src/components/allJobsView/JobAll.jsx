import React, { useContext, useState } from "react";
// import { JobContext } from "../../context/JobProvider";
import { StaffContext } from "../../context/StaffProvider";
// import { UserContext } from "../../context/UserContext";

function Job(props) {
    const { 
        job, 
        price, 
        location, 
        isPending, 
        _id,
        userId
    } = props

    const {
        acceptJob
    } = useContext(StaffContext)
        
    // const {
    //     acceptJob
    // } = useContext(JobContext)

    const user = JSON.parse(localStorage.getItem('user'))
    const staff = user.isStaff
  

    return (
        <div className="availableJob" disabled={isPending} >
            {/* <h3>{job}</h3>
            <h5>{location}</h5>
            <h4>${price}</h4> */}
            <ul>
                <li>
                    <h3>{job}</h3>
                </li>
                <li>
                    <h5>{location}</h5>
                </li>
                <li>
                    <h4>${price}</h4>
                </li>
            </ul>
            {
                staff &&
                    <button
                        onClick={
                            () => acceptJob(userId, _id, isPending)
                            // () => acceptJob({isPending: !isPending}, _id)
                        }
                        // disabled={isPending}
                        >
                        { isPending ? 'claimed' : 'claim'}
                    </button>
            }
            

        </div>
    )
}

export default Job