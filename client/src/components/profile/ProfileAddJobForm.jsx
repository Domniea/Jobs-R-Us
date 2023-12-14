import React, { useState, useContext } from "react";
import { JobContext } from "../../context/JobProvider";
import { UserContext } from "../../context/UserProvider";




function JobForm(props) {

const {
        token
} = useContext(UserContext)

const {
    postJob,
    getUsersJobsPosted
} = useContext(JobContext)

const {
   _id,
    editing,
    toggle,
    submit
} = props

const initInputs = {
    job: '',
    location: '',
    price: ''
}

const [inputs, setInputs] = useState(initInputs)

function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevState => ({
        ...prevState,
        [name]: value
    }))
}

function handleSubmit(e) {
    e.preventDefault()
    submit(inputs, _id) 
    {editing && toggle()}
    // { !editing && getUsersJobsPosted(_id) }
}

    return(
        <div className="profile--form">
            <form className="profile--addJobForm" onSubmit={handleSubmit}>
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    name='job'
                    id='job'
                    value={inputs.job}
                    onChange={handleChange}
                />
                <label htmlFor="location">Location</label>  
                <input 
                    type="text" 
                    name='location'
                    id='location'
                    value={inputs.location}
                    onChange={handleChange}
                />
                <label htmlFor="price">Price</label>
                <input 
                    type="text" 
                    name='price'
                    id='price'
                    value={inputs.price}
                    onChange={handleChange}
                />
                    <button>Submit</button>
           </form>
        </div>
    )
}

export default JobForm