import React from 'react'
import ChatBox from '../chatBox/chatBox'
import SideBar from '../sideBar/sideBar'
import './chatVia.css'

import { selectChatName } from './../../features/chatSlice';
import { useSelector } from 'react-redux';
import { selectUser } from './../../features/userSlice';

import 'bootstrap/dist/css/bootstrap.min.css'

export default function ChatVia() {
    const chatName = useSelector(selectChatName)
    const user = useSelector(selectUser)

    return (
        <div className="chatVia">
            {user ? <SideBar /> : ''}
            {chatName ? <ChatBox /> : ''}
        </div>
    )
}
