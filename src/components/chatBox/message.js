import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from './../../features/userSlice';

const Message = forwardRef(({
    id, 
    contents: { timestamp, displayName, email, message, photoURL, uid } 
    }, ref) => {
    const user = useSelector(selectUser)

    return (
        <div ref={ref} 
            className={`message ${user.email === email && "message__sender"}`} id={id}>
            <Avatar src={photoURL} className="message__photo" />
            <p>{message}</p>
            <small className="message__timestamp" >{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
    }
);

export default Message;