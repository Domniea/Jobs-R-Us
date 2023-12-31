import React, { useContext } from "react";
import JobListUserCompleted from "./JobListUserCompleted";
import { UserContext } from "../../context/UserProvider";

function CompletedView() {
    const {
        user: {
            _id
        }
    } = useContext(UserContext)

    
    return (
        <div>
            <JobListUserCompleted 
                _id={_id}
            />
        </div>
    )
}

export default CompletedView