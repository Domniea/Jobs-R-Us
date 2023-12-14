import React, { useState, useContext} from "react";
import { StaffContext } from "../../context/StaffProvider";

function StaffJobPending(props) {
    const { 
        job, 
        price, 
        location, 
        isPending, 
        _id,
        userId
    } = props

    const {
        cancelJob
    } = useContext(StaffContext)


    return (
        <div>
            <div className="staff-jobPending">
                {job}
                <button onClick={() => cancelJob(_id)}>Cancel Job</button>
            </div>
        </div>
    )
}

export default StaffJobPending