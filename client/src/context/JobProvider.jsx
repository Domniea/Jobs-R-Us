import React, { useState, createContext } from "react";
import axios from "axios";

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config  
})

const JobContext = createContext()

function JobProvider(props) {

    const [allJobs, setAllJobs] = useState([])
    const [usersJobsPosted, setUsersJobsPosted] = useState([])
    const [usersJobsPending, setUsersJobsPending] = useState([])
    const [usersJobsCompleted, setUsersJobsCompleted] = useState([])
    
    const pendingJobs = usersJobsPosted.filter(job => job.isPending === true)



    //Get All Jobs
    function getAllJobs() {
        userAxios.get('/api/api/jobs')
            .then(res => {
                // console.log(res.data)
                return setAllJobs(res.data)
            })
            .catch(err => console.log(err))
    }

    //Get User All
    function getUsersJobsPosted(userId) {
        userAxios.get(`/api/api/jobs/${userId}`)
            .then(res => {
                // console.log(res.data)
                return setUsersJobsPosted(res.data)
            })
            .catch(err => console.log(err))
    }

    //Get User Completed
    function getUsersJobsCompleted(userId) {
        userAxios.get(`/api/api/jobs/${userId}/completed`)
            .then(res => {
                // console.log(res.data)
                setUsersJobsCompleted(res.data)
            })
            .catch(err => console.log(err))
    }

    //Post Job
    function postJob(credentials, userId) {
        userAxios.post(`/api/api/jobs/${userId}`, credentials)
            .then(res => {
                console.log(res.data)
                setUsersJobsPosted(prevState => {
                    return [
                        ...prevState, 
                        res.data
                    ]
                })
            })
            .catch(err => {
                console.log(err.response.data.errMsg)
            })
    }

    //Delete Job
    function deleteJob(jobId) {
        userAxios.delete(`/api/api/jobs/${jobId}`)
            .then(res => {
                console.log(res.data)
                setUsersJobsPosted(prevState => {
                    return prevState.filter(job => job._id !== jobId)
                })
            })
            .catch(err => console.log(err))
    }

    //Accept Job Offer and toggle 'isPending'
    function acceptJob(user, jobId) {
        userAxios.put(`/api/api/jobs/${jobId}`, {workedOnBy: user})
            .then(res => {
                console.log(res)
                getAllJobs()
            })
            .catch(err => console.log(err))

    }


    return (
        <JobContext.Provider
            value={{
                allJobs,
                setAllJobs,
                usersJobsPosted,
                setUsersJobsPosted,
                usersJobsPending,
                setUsersJobsPending,
                usersJobsCompleted,
                setUsersJobsCompleted,
                getAllJobs,
                getUsersJobsPosted,
                getUsersJobsCompleted,
                postJob,
                deleteJob,
                acceptJob,
                pendingJobs
            }}
        >
            {props.children}
        </JobContext.Provider>
    )
    
}

export { JobContext, JobProvider }