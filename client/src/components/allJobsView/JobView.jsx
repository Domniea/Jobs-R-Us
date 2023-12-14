import React from "react";
import JobListAll from "./JobListAll";

function JobView() {
    return (
        <div className="JobView">
            <header>
                <h1>All Jobs</h1>
            </header>
            <JobListAll />
        </div>
    )
}

export default JobView