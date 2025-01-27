import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Outlet />
            <div className="">Footer</div>
        </div>
    )
}

export default Layout