import React, { useState, useContext, useEffect} from "react";
import { UserContext } from "../context/UserProvider";
import { JobContext } from "../context/JobProvider";
import { StaffContext } from "../context/StaffProvider";
import { Link } from 'react-router-dom'

function Navbar(props) {
    // const {
    //     loggedIn
    // } = props

    const {
        claimedJobs
    } = useContext(StaffContext)

    const {
        token,
        user: {
            isSuper,
            isManager,
            isStaff,
            _id
        },
        logout
    } = useContext(UserContext)
    
    const {
        pendingJobs,
        usersJobsPosted,
        getUsersPending
    } = useContext(JobContext)

    useEffect(() => {
        if(_id){
            getUsersPending(_id)
        }
    }, [claimedJobs])
    

    return (
        <div className="Navbar">
            <nav>
                { isStaff && <Link to='/staff/profile'>Staff</Link> }
                <Link to={'/profile'}>
                {
                    pendingJobs.length > 0 &&
                            <span className="badge">
                                {pendingJobs.length}
                            </span>
                }
                    Profile
                </Link>
                {/* { isStaff && <Link to='/profile'>Post</Link> } */}
                <Link to='/jobsmain'>Jobs</Link>
                { isManager  && <Link to='/management/addStaff'>Add Staff</Link> }
                <button onClick={() => logout()}>Logout</button>
            </nav>
        </div>
    )
}

export default Navbar