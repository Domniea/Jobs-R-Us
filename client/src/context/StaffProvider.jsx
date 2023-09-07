import React, { useState, createContext } from "react";
import axios from "axios";

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const StaffContext = createContext()

function StaffProvider(props) {

    const [userList, setUserList] = useState([])
    const [claimedJobs, setClaimedJobs] = useState([])
    const [completedJobs, setCompletedJobs] = useState([])


    //Get All Users
    function getAllUsers() {
        userAxios.get('/api/api/staff')
            .then(res => setUserList(res.data))
            .catch(err => console.log(err))
    }

    //Find By Email
    function findByEmail(emaiAddress) {
        userAxios.get(`/api/api/staff/search/?email=${emaiAddress}`)
            .then(res => {
                console.log(res.data)
                setUserList(res.data)
            })
            .catch(err => console.log(err))
    }

    //Add & Delete Staff
    function addDeleteStaff(credentials, userId) {
        userAxios.put(`/api/api/staff/${userId}`, credentials)
            .then(res => {
                setUserList(prevState => {
                    return prevState.map(person => person._id !== userId ? person : res.data)
                })
                const employee = res.data.isStaff
                console.log(localStorage.user)
            })
                // const employee = res.
            .catch(err => console.log(err))
    }

    
    //Get All Staff Claimed Jobs
    function getClaimed(userId) {
        userAxios.get(`/api/api/staff/${userId}/claimed`)
            .then(res => {
                // console.log(res)
                setClaimedJobs(res.data)
            })
            .catch(err => console.log(err))
    }

    //Get All Staff Completed Jobs
    function getCompletedJobs(userId) {
        userAxios.get(`/api/api/staff/${userId}/completed`)
            .then(res => {
                console.log(res)
                setCompletedJobs(res.data)
            })
            .catch(err => console.log(err))
    }

    //Cancel Job
    function cancelJob(jobId) {
        userAxios.put(`/api/api/staff/${jobId}/cancel`)
            .then(res => {

                setClaimedJobs(prevState => {
                    return  prevState.filter(job => job._id !== jobId)
                }
            )
        })
            .catch(err => console.log(err))
    }


    return (
        <StaffContext.Provider
            value={{
                getAllUsers,
                userList,
                setUserList,
                addDeleteStaff,
                findByEmail,
                getClaimed,
                getCompletedJobs,
                completedJobs,
                claimedJobs,
                setClaimedJobs,
                cancelJob
            }}
        >
            {props.children}
        </StaffContext.Provider>
    )
}

export { StaffContext, StaffProvider }