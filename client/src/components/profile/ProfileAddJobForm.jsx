import React, { useState, useContext } from "react";
import { JobContext } from "../../context/JobProvider";
import { UserContext } from "../../context/userProvider";




function JobForm(props) {

// const {
//         userState
// } = useContext(UserContext)

const {
    postJob,
    getUsersJobsPosted
} = useContext(JobContext)

const {
    userId
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
    postJob(inputs, userId)   
    getUsersJobsPosted(userId)
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                {/* <div> */}
                    <label htmlFor="job">Job</label>
                    <input 
                        type="text" 
                        name='job'
                        value={inputs.job}
                        onChange={handleChange}
                    />
                {/* </div> */}
                {/* <div> */}
                    <label htmlFor="location">Location</label>
                    <input 
                        type="text" 
                        name='location'
                        value={inputs.location}
                        onChange={handleChange}
                    />
                {/* </div> */}
                {/* <div> */}
                    <label htmlFor="price">Price</label>
                    <input 
                        type="text" 
                        name='price'
                        value={inputs.price}
                        onChange={handleChange}
                    />
                {/* </div> */}
                
                <button>Submit</button>
           </form>
        </div>
    )
}

export default JobForm