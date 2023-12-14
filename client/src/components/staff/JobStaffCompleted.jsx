import React from "react";

function JobStaffCompleted(props) {
    const {
        job, location, price
    } = props

    return (
        <div className="staff--completed">
            <div className="left centered">
                <h5>{job}</h5>
            </div>
            <div className="left-transition centered">
                <h1>-</h1>
            </div>
            <div className="middle centered">
                <h6>{location}</h6>
            </div>
            <div className="right-transition centered">
                <h1>-</h1>
            </div>
            <div className="right centered">
                <h6>{price}</h6>
            </div>
        </div>
    )
}

export default JobStaffCompleted