import React from "react";

function AuthForm(props) {
    const {
        handleChange,
        handleSubmit,
        inputs: {
            username,
            password
        },
        btnText
    } = props


    return (
        <div className="AuthForm spacer container">
        <form className="Auth--form"onSubmit={handleSubmit}  >
            <div className="AuthFrom--inputs">
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name='username'
                    id="username"
                    value={username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name='password'
                    id="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <button>{btnText}</button>
            
        </form>
        </div>
    )
}

export default AuthForm