import React, { useContext} from "react";
import { UserContext } from "../context/userProvider";
import { JobContext } from "../context/JobProvider";
import { Link } from 'react-router-dom'

function Navbar() {
    const {
        logout,
        user: {
            isSuper,
            isManager,
            isStaff
        }
    } = useContext(UserContext)
    
    const {
        pendingJobs
    } = useContext(JobContext)

    return (
        <div className="Navbar">
            <nav>
                <Link to='/profile'>
                    Profile
                  {
                    pendingJobs.length > 0 &&
                            <span className="badge">
                                {pendingJobs.length}
                            </span>
                  }
          
                </Link>
                <Link to='/jobsmain'>Jobs</Link>
                { isManager  && <Link to='/addStaff'>Add Staff</Link> }
                <button onClick={() => logout()}>Logout</button>
            </nav>
        </div>
    )
}

export default Navbar