import React from "react";

function JobStaffCompleted(props) {
    const {
        job, location, price
    } = props

    console.log(props)
    return (
        <div className="staff--compleated">
            <h5>{job}</h5>
            <h6>{location}</h6>
            <h6>{price}</h6>
        </div>
    )
}

export default JobStaffCompleted