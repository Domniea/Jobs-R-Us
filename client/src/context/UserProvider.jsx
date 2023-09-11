import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

const userAxios = axios.create()

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const UserContext = createContext()

function UserProvider(props) {
    
    const navigate = useNavigate()

    const initUser = {
        user: JSON.parse(localStorage.getItem('user')) || '',
        token: localStorage.getItem('token') ||  '',
        errMsg: ''
    }

    const [userState, setUserState] = useState(initUser)
    const [loggedIn, setLoggedIn] = useState(false)

    function errMsg(err) {
        setUserState(prevState => ({
            ...prevState,
            errMsg: err
        }))
    }

    //Signup
    function signup(credentials) {
        axios.post('/api/auth/signup', credentials)
            .then(res => {
                const { token, user } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                console.log(res)
                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }))
                navigate('/profile')
                setLoggedIn(true)
            })
            .catch(err => errMsg(err.response.data.errMsg))
    }

    //Login
    function login(credentials) {
        axios.post('/api/auth/login', credentials)
        .then(res => {
            const { token, user } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevState => ({
                ...prevState,
                user,
                token
            }))
            if(user.isStaff) {
                navigate('/staff/profile')
            } else {
                navigate('/profile')   
            }
            setLoggedIn(true)

        })
        .catch(err => errMsg(err.response.data.errMsg))
    }

    //Logout
    function logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUserState({
            user: {},
            token: '',
            errMsg: ''
        })
        navigate('/')
        setLoggedIn(false)
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }