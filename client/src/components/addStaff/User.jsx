import React, { useState } from "react";

function User(props) {

    const {
        username,
        _id,
        isStaff,
        isManager,
        addDeleteStaff,
    } = props

    const [user, setUser] =useState({username, isStaff})


    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setUser(prevState => {
            return {
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        addDeleteStaff(user, _id)
        
        
    }

    return (
        <div className="User container">
            <h3>username: {username}</h3>
            <form onSubmit={handleSubmit} className="user--select"> 
                <label htmlFor="isStaff">Staff?</label>
                <input 
                    type="checkbox"
                    name="isStaff" 
                    id='isStaff'
                    checked={user.isStaff}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            {/* <h4>Staff: {isStaff ? 'true' : 'false'}</h4> */}

        </div>
    )
}

export default User