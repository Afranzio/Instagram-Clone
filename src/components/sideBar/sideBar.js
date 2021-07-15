import React, {useState, useEffect} from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import Input from '@material-ui/core/Input'
import { RateReviewOutlined } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search'
import './sideBar.css'
import db from '../../firebase'

// Module
import ChatComponent from './chatComponent'
import { useSelector } from 'react-redux';
import { selectUser } from './../../features/userSlice';
import { Link } from 'react-router-dom'

export default function SideBar() {

    const user = useSelector(selectUser)
    const [chats, setChats] = useState([])

    useEffect(() => {
        db.collection('chats').onSnapshot((snapshot) =>
            setChats(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                }))
            )
        );
    }, []);

    const addChat = () => {
        const chatName = prompt('Please enter a chat name.')
        if(chatName){
            db.collection('chats').add({
                chatName: chatName
            })
        }
    }

    return (
        <div className="sideBar">
            <div className="sidebar__header">
                <Link to="/" >
                    <Avatar src={user.photoURL} className="sidebar__avatar" />
                </Link>
                <div className="sidebar__input">
                    <SearchIcon />
                    <Input placeholder="Search" />
                </div>

                <IconButton variant="outlined" className="sidebar__inputButton" onClick={addChat}>
                    <RateReviewOutlined />
                </IconButton>

            </div>
            <div className="sidebar__chats">
                {chats.map(({id, data: {chatName} }) => (
                    <ChatComponent key={id} id={id} chatName={chatName} />
                ))}
            </div>
        </div>
    )
}
