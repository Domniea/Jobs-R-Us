import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProfileAddJobForm from "./ProfileAddJobForm";
import JobListUserPosted from "./JobListUserPosted";
import { UserContext } from "../../context/UserProvider";
import { JobContext } from "../../context/JobProvider";

function Profile() {

    const {
        user: {
            username,
            _id,
            isStaff
        },
        signup
    } = useContext(UserContext)

    const {
        getUsersJobsPosted,
        postJob
    } = useContext(JobContext)

    useEffect(() => {
        getUsersJobsPosted(_id)
    }, [])

    return (
        <div>
            { !isStaff && <h1>Welcome {username[0].toUpperCase() + username.slice(1)}</h1>}
            { isStaff && <h1>Post A Job</h1>}
            <ProfileAddJobForm 
                submit={postJob}
                _id= {_id}
            />
            <JobListUserPosted />
            <Link className='click-link' to='/completed'>Completed Jobs </Link>
            {/* <JobListUserCompleted 
                _id={_id} */}
        </div>
    )
}

export default Profile 