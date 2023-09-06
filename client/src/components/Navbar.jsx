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
            isStaff,
            
        }
    } = useContext(UserContext)
    
    const {
        pendingJobs
    } = useContext(JobContext)

    return (
        <div className="Navbar">
            <nav>
                <Link to={isStaff ? '/staff/profile' : '/profile'}>
                    Profile
                  {
                    pendingJobs.length > 0 &&
                            <span className="badge">
                                {pendingJobs.length}
                            </span>
                  }
          
                </Link>
                { isStaff && <Link to='/profile'>Post</Link> }
                <Link to='/jobsmain'>Jobs</Link>
                { isManager  && <Link to='/management/addStaff'>Add Staff</Link> }
                <button onClick={() => logout()}>Logout</button>
            </nav>
        </div>
    )
}

export default Navbar