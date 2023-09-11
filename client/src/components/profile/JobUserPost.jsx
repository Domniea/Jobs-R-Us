import React, { useState, useContext } from "react";
import EditJobForm from "./EditJobForm";
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
        <div>
            <div className="job">
                {
                    isPending &&
                    <button
                        onClick={() => finalizeJob(_id)}
                    >
                        Complete
                    </button>
                }
                {!edit ?
                    <>
                        <h3>{job}</h3>
                        <h5>{location}</h5>
                        <h4>${price}</h4>
                    </>
                    : 
                    <>
                        <ProfileAddJobForm 
                            submit={editJob}
                            _id={_id}
                            editing={edit}
                            toggle={toggle} 
                        />
                        {/* <EditJobForm /> */}
                    </>
                }
            </div>
            <button onClick={() => toggle()}>edit</button>
            <button onClick={() => deleteJob(_id)}>delete</button>
        </div>
    )
}

export default JobUserPost