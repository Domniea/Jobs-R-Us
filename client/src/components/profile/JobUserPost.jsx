import React from "react";

function JobUserPost(props) {
    const {
        job, 
        price, 
        location, 
        isPending,
        _id
    } = props
    
    return(
        <div className="job">
            {
                isPending &&
                <button
                    // onClick={completeJob}
                >
                    Complete
                </button>
            }
            <h3>{job}</h3>
            <h5>{location}</h5>
            <h4>${price}</h4>
        </div>
    )
}

export default JobUserPost