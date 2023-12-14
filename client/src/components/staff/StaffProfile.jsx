import React, {useContext, useState, useEffect} from "react";
import StaffListPending from "./StaffListPending";
import JobListStaffCompleted from "./JobListStaffCompleted";
import Payment from "./Payment";
import { UserContext } from "../../context/UserProvider";


function StaffProfile() {
    const {
        user: {
            username,
            _id
        }
    } = useContext(UserContext)

    return (
        <div className="StaffProfile">
            <header>
                <h1>Welcome {username[0].toUpperCase() + username.slice(1)}</h1>
            </header>
            <StaffListPending />
            <Payment />
            <JobListStaffCompleted/>
        </div>
    )
}

export default StaffProfile