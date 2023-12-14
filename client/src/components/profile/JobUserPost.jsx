import React, { useState, useContext } from "react";
import ProfileAddJobForm from './ProfileAddJobForm'
import { JobContext } from "../../context/JobProvider";


function JobUserPost(props) {
    const {
        job, 
        price, 
        location, 
        isPending,
        _id
    } = props

    const {
        editJob,
        deleteJob,
        finalizeJob
    } = useContext(JobContext)
    
    const [edit, setEdit] = useState(false)

    function toggle() {
        setEdit(prevState => !prevState)
    }

    return(
        <div className="profile-postedJob">
            <div className="profile--postedJobDescription">
                {!edit ?
                    <div className="spacer">
                        <h3>{job}</h3>
                        <h5>{location}</h5>
                        <h4>${price}</h4>
                    </div>
                    :
                    <div className="">
                        <ProfileAddJobForm 
                            submit={editJob}
                            _id={_id}
                            editing={edit}
                            toggle={toggle} 
                            input1={job}
                            input2={location}
                            input3={price}
                        />
                    </div>
                }
            </div>
            {
                isPending ?
                    <button
                    onClick={() => finalizeJob(_id)}
                    >
                        Complete
                    </button>
                    :
                        <div className="centered">
                            <button onClick={() => toggle()}>edit</button>
                            <button onClick={() => deleteJob(_id)}>delete</button>
                        </div>
            }
        </div>
    )
}

export default JobUserPost