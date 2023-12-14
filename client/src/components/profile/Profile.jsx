import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProfileAddJobForm from "./ProfileAddJobForm";
import JobListUserPosted from "./JobListUserPosted";
import JobListUserCompleted from "./JobListUserCompleted";
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
        <div className="Profile">
           <header>
                { 
                    isStaff ? 
                    <h1>Post A Job</h1> 
                    : 
                    <h1>Welcome {username[0].toUpperCase() + username.slice(1)}</h1>
                }
           </header>
           
            <ProfileAddJobForm 
                submit={postJob}
                _id= {_id}
                input1={'job'}
                input2={'location'}
                input3={'price'}
            />
            <JobListUserPosted />
            <div className="link--completed" >
                <Link to='/completed'>Completed Jobs </Link>
            </div>
            {/* <JobListUserCompleted 
                _id={_id}
                /> */}
        </div>
    )
}

export default Profile 