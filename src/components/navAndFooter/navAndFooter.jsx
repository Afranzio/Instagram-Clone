import React from 'react'
import Navbar from './../Navbar/Navbar';
import { useLocation } from 'react-router-dom';

export default function NavAndFooter({user}) {

    const location = useLocation()

    return (
        <div>
            {location.pathname !== "/chat" ? <Navbar user={user} /> :""}
        </div>
    )
}
