import React from "react";

function JobUserCompleted(props) {
const {
    job,
    location,
    price
} = props

    return (
        <div className="profile--completedJob container">
            <h3>{job}</h3>
            <h5>{location}</h5>
            <h4>${price}</h4>
        </div>
    )
}

export default JobUserCompleted