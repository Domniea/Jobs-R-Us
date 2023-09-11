import React, { useContext, useEffect, useState } from "react";
import User from "../User";
import { StaffContext } from "../../context/StaffProvider";

function UserList() {

    const {
        userList,
        getAllUsers,
        addDeleteStaff,
        findByEmail
    } = useContext(StaffContext)

    const initInputs = {
        searchEmail: ''
    }

    const [inputs, setInputs] = useState(initInputs)

    useEffect(() => {
        getAllUsers()
    }, [])

      function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        findByEmail(inputs.searchEmail)
    }

    const user = userList.map(person => {
        return <User
        key={person._id}
        {...person}
        addDeleteStaff={addDeleteStaff}
        
        />
    })

    return (
        <div className="UserList">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Search By Email</label>
            <input 
                type="text"
                name="searchEmail"
                value={inputs.searchEmail}
                onChange={handleChange} 
                placeholder="Email"
            />
            <button>Search</button>
        </form>

            {user}
        </div>
    )
}

export default UserList