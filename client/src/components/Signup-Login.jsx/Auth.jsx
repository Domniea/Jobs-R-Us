import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'
import AuthForm from './AuthForm'
import WorkSVG from '/src/svg/welcome-jobs.svg'


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
            <div className="wwlcome--header container">
                <header>
                    <h1>The Job Search Of Tomorrow!</h1>           
                </header>
            </div>
            <div className='Auth--container'>
                <AuthForm 
                    inputs={inputs}
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    btnText='Log In!'
                />
                <Link style={{color: "white", fontSize: "2rem"}}to='/createuser'>Create New Account</Link>
                { errMsg && <h1 className='errorMsg'>{errMsg}</h1> }
                
            </div>  

            <div className='test-instructions container'>
                <h4>
                    *For testing purposes ADMIN credentials are listed below 
                    to allow users to login as Managment. 
                </h4>
                <br />
                <h3>
                    <ul>
                            <li>Username: "boss"</li>
                            <li>Password: "password"</li>
                    </ul>

                </h3>
                <br />
                <h4>
                    * While logged in as ADMIN(Managment), Users can search their profiles(or a secondary test profile)
                    via email, and convert their profile to a "Staff" profile,
                    allowing them to respond/accept job postings
                </h4>
            </div>
                <img src={WorkSVG} className='homepage--SVG'/>
           
        </div>
    )
}

export default Auth