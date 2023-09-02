import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthForm from './AuthForm'
import { UserContext } from '../context/userProvider'


function Auth() {

    const {
        userState,
        signup,
        login
    } = useContext(UserContext)

    const initInputs = {
        username: '',
        password: ''
    }

    const [inputs, setInputs] = useState(initInputs)
    const [loggedIn, SetLoggedIn] = useState(false)

    function toggle() {
        SetLoggedIn(prevState => !prevState)
    }
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSignUp(e) {
        e.preventDefault()
        // console.log(inputs)
        signup(inputs)
    }
    function handleLogin(e) {
        e.preventDefault()
        // console.log(inputs)
        login(inputs)
    }

    return (
        <div>
            {/* { !loggedIn ?
                <>
                    <AuthForm 
                        inputs={inputs}
                        handleChange={handleChange}
                        handleSubmit={handleSignUp}
                        btnText='Sign Up!'
                    />
                     <h2 onClick={toggle}>Already a user?</h2>
                
                </>
                    :
                    <> */}
                        <AuthForm 
                            inputs={inputs}
                            handleChange={handleChange}
                            handleSubmit={handleLogin}
                            btnText='Log In!'
                        />
                         {/* <h2 onClick={toggle}>Create An Account?</h2> */}
                {/* </>
            } */}

            <Link to='/createuser'>Create New Account</Link>
           
        </div>
    )
}

export default Auth