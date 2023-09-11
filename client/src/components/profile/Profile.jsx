import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProfileAddJobForm from "./ProfileAddJobForm";
import JobListUserPosted from "./JobListUserPosted";
import JobListUserCompleted from "./JobListUserCompleted";
import { UserContext } from "../../context/userProvider";
import { JobContext } from "../../context/JobProvider";
import Job from "../allJobsView/JobAll.jsx";

function Profile() {

    const {
        token,
        user: {
            username,
            _id,
            isStaff
        },
        signup
    } = useContext(UserContext)

    // const {
    //     usersJobsPosted
    // } = useContext(JobContext)

    const {
        usersJobsPosted,
        getUsersJobsPosted,
        deleteJob
    } = useContext(JobContext)

    useEffect(() => {
        getUsersJobsPosted(_id)
    }, [])

    return (
        <div>
            { !isStaff && <h1>Welcome {username}</h1>}
            { isStaff && <h1>Post A Job</h1>}
            <ProfileAddJobForm 
                userId= {_id}
            />
            <JobListUserPosted 
                _id={_id}
            />
            <Link to='/completed'>Completed Jobs</Link>
            {/* <JobListUserCompleted 
                _id={_id} */}
            />
        </div>
    )
}

export default Profile 