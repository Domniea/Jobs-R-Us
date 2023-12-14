import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
// import { JobContext } from "../../context/JobProvider";
import { StaffContext } from "../../context/StaffProvider";


function Payment() {
    const {
        user: {
            _id
        }
    } = useContext(UserContext)

    const {
        getTotalEarned,
        totalPay
    } = useContext(StaffContext)
    
    useEffect(() => {
        getTotalEarned(_id)
    }, [])

const total = totalPay.reduce((acc, job) => {
    const { price } = job
    let final = acc += price
    return final
}, 0)

    return (
        <div className="payment--container container">
            <div>
                <h3>Total Earned</h3>
                <h3>${total}</h3>
            </div>
            <button onClick={() => alert('You Got Paid!!!!!')}>GET PAID!!!</button>
        </div>
    )
}

export default Payment