import React from 'react'
import { useLocation } from 'react-router-dom';
import Footer from './../footer/footer';


export default function FooterContainer() {

    const location = useLocation()

    return (
        <div>
            {location.pathname !== "/chat" ? <Footer className="px-3 bottom" /> :""}
        </div>
    )
}
