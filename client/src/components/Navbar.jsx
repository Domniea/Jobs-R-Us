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
        <div className="Navbar dropdown">
            <nav className="dropdown-content">
                <ul>
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
                </ul>
            </nav>
        </div>

        // <div className="Navbar dropdown">
        //     <nav className="dropdown">
        //         <ul className="dropdown-content">
                    
        //             { isStaff && 
        //                 <li>
        //                     <Link to='/staff/profile'>Staff</Link> 
        //                 </li>
        //             }
        //             <li>
        //                 <Link to={'/profile'}>
        //                 {
        //                     pendingJobs.length > 0 &&
        //                         <li>
        //                             <span className="badge">
        //                                 {pendingJobs.length}
        //                             </span>

        //                         </li>

        //                 }
        //                     Profile
        //                 </Link>
        //             </li>
        //             {/* { isStaff && <Link to='/profile'>Post</Link> } */}
        //                 <li>
        //                     <Link to='/jobsmain'>Jobs</Link>
        //                 </li>

        //             { isManager  &&
        //                 <li>
        //                     <Link to='/management/addStaff'>Add Staff</Link>
        //                 </li>
        //             }
        //             <button onClick={() => logout()}>Logout</button>

        //         </ul>
        //     </nav>
        // </div>
    )
}

export default Navbar