import React, { useState, useContext } from "react";
import { UserContext } from "../context/userProvider";



function CreateUser() {

    const {
        errMsg,
        signup
    } = useContext(UserContext)
    console.log(errMsg)
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
        <div>
            <h1>Create User</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                <label htmlFor="username">Password</label>
                <input 
                    type="text" 
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
                <br></br>
                <h2>{errMsg}</h2>
        </div>
    )
}

export default CreateUser