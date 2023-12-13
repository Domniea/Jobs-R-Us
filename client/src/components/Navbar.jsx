import React, { useState, useContext, useEffect} from "react";
import { UserContext } from "../context/UserProvider";
import { JobContext } from "../context/JobProvider";
import { StaffContext } from "../context/StaffProvider";
import { Link } from 'react-router-dom'


function Navbar(props) {
    // const {
    //     loggedIn
    // } = props

    const [dropdown, setDropdown] = useState({
        isVisible: false
    })

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
    

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setDropdown(prevState => {
            return {
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    console.log(dropdown)
    return (
        <div className="Navbar ">
            <div className="Navbar--header">
                <h1 style={{backgroundColor: "white"}}>J.S.O.T</h1>
                <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
                <input 
                    type="checkbox"
                    name="isVisible" 
                    id="side-menu"
                    checked={dropdown.isVisible}
                    onChange={handleChange}
                    className="side-menu"
                />
            </div>
            {
                dropdown.isVisible && 
                <ul className="Navbar--dropdown">
                    <li>
                        { 
                        isStaff && <Link to='/staff/profile'>Staff</Link> 
                        }
                    </li>
                    <li>
                        <Link to={'/profile'}>
                        {
                            pendingJobs.length > 0 &&
                                    <span className="badge">
                                        {pendingJobs.length}
                                    </span>
                        }
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to='/jobsmain'>Jobs</Link>
                    </li>
                    {/* { isStaff && <Link to='/profile'>Post</Link> } */}
                    { 
                        isManager  && 
                        <li>
                            <Link to='/management/addStaff'>Add Staff</Link> 
                        </li>
                    }
                    <li>
                        <button onClick={() => logout()}>Logout</button>
                    </li>
                </ul>
            }
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