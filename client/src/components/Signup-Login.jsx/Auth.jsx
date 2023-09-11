import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthForm from './AuthForm'
import { UserContext } from '../../context/userProvider'


function Auth() {

    const {
        errMsg,
        login
    } = useContext(UserContext)

    const initInputs = {
        username: '',
        password: ''
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleLogin(e) {
        e.preventDefault()
        // console.log(inputs)
        login(inputs)
    }

    return (
        <div className='Auth'>     
            <AuthForm 
                inputs={inputs}
                handleChange={handleChange}
                handleSubmit={handleLogin}
                btnText='Log In!'
            />
            <Link to='/createuser'>Create New Account</Link>
            { errMsg && <h1>{errMsg}</h1> }

           
        </div>
    )
}

export default Auth