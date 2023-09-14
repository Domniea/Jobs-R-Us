import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";



function CreateUser() {

    const navigate = useNavigate()
    
    const {
        errMsg,
        signup
    } = useContext(UserContext)

    const initInputs = {
        username: '',
        password: '',
        email: ''
    }

    const [inputs, setInputs] = useState(initInputs)

    const {
        username,
        password,
        email
    } = inputs

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        signup(inputs)
        
    }

    return (
        <div className="CreateUser">
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username"
                    id='username'
                    value={username}
                    onChange={handleChange}
                    autoComplete="username"
                />
                <label htmlFor="username">Password</label>
                <input 
                    type="text" 
                    name="password"
                    id='password'
                    value={password}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    id='email'
                    value={email}
                    onChange={handleChange}
                    autoComplete="email"
                />
                <button>Submit</button>
            </form>
            <button onClick={() => navigate('/')}>Back to Login </button>
                <br></br>
                <h2>{errMsg}</h2>
        </div>
    )
}

export default CreateUser