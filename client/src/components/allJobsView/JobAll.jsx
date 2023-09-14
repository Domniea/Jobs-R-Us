import React, { useContext, useState } from "react";
// import { JobContext } from "../../context/JobProvider";
import { StaffContext } from "../../context/StaffProvider";
// import { UserContext } from "../../context/UserContext";

z
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
        <div className="Job job" disabled={isPending} >
            <h3>{job}</h3>
            <h5>{location}</h5>
            <h4>${price}</h4>
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