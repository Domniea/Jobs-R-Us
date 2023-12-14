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
        <div className="AuthForm spacer">
        <form onSubmit={handleSubmit}  >
            <div>
                <label htmlFor="username">username</label>
                <input 
                    type="text"
                    name='username'
                    id="username"
                    value={username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">password</label>
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