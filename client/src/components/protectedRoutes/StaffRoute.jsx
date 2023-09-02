import React from "react";

function StaffRoute(props) {
    const { token, isStaff, children, redirectTo } = props

    return (
        <div>{token && isStaff ? children : redirectTo}</div>
    )
}

export default StaffRoute