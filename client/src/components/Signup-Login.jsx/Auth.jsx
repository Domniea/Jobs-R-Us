import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthForm from './AuthForm'
import { UserContext } from '../../context/UserProvider'


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
        // console.log(inputs)Accompaniment
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

            <div className='test-instructions'>
                {/* <h2>
                    For testing purposes User/Passwords 
                    are listed below with their respective permissions 
                    in order to see full capabilities of the program. 
                
                </h2> */}
                <h2>
                    - For testing purposes ADMIN credentials are listed below 
                    to allow users to login as Managment. 
                </h2>
                <h3>
                    <ul>
                            <li>Username: "boss"</li>
                            <li>Password: "password"</li>
                    </ul>

                </h3>
                <h4>
                    * While logged in as ADMIN(Managment), Users can search their profiles(or a secondary test profile)
                    via email, and convert their profile to a "Staff" profile,
                    allowing them to respond/accept job postings
                </h4>

            </div>

           
        </div>
    )
}

export default Auth