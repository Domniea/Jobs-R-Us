import React, { useContext, useState } from "react";
import { JobContext } from "../../context/JobProvider";


function Job(props) {
    const { job, 
        price, 
        location, 
        isPending, 
        _id } = props

    const {
        acceptJob
    } = useContext(JobContext)
    
    const user = JSON.parse(localStorage.getItem('user'))
    const staff = user.isStaff
    const userid = user._id 
    

    return (
        <div className="Job job" disabled={isPending} >
            <h3>{job}</h3>
            <h5>{location}</h5>
            <h4>${price}</h4>
            {
                staff &&
                    <button
                        onClick={
                            () => acceptJob({isPending: !isPending}, _id)
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