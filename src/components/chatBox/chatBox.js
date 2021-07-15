import React, {useState, useEffect} from 'react'
import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import './chatBox.css'
import Message from './message';
import { useSelector } from 'react-redux';
import { selectChatName, selectChatId } from './../../features/chatSlice';
import { selectUser } from './../../features/userSlice';
import FlipMove from 'react-flip-move'

import db from '../../firebase'
import firebase from 'firebase';

export default function ChatBox() {

    const user = useSelector(selectUser)
    const chatName = useSelector(selectChatName)
    const chatId = useSelector(selectChatId)
    const [inputValue, setInputValue] = useState("")
    const [messages, setMessages] = useState([])


    useEffect(() => {
        if(chatId){
            db.collection("chats")
            .doc(chatId)
            .collection("messages")
            .orderBy('timestamp', "asc").onSnapshot(snapshot =>{
                setMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            })
        }
    },[chatId])

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("chats").doc(chatId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: inputValue,
            uid: user.uid,
            photoURL: user.photoURL,
            email: user.email,
            displayName: user.displayName,
        })

        setInputValue("")
    }

    return (
        <div className="chatBox">
            {/* Header */}
            <div className="chatBox__header">
                <h4>
                To: <span className="chatBox__username">{chatName}</span>
                </h4>
                <strong>Details</strong>
            </div>
            
            {/* ChatBox */}
            <div className="chatBox__chats">
                <FlipMove>
                    {messages.map(({id, data}) => (
                        <Message key={id} id={id}  contents={data} />
                    ))}
                </FlipMove>
            </div>
            
            {/* InputBox */}
            <div className="chatBox__inputBox">
                <form>
                    <input type="text" 
                        placeholder="fireMessage" 
                        value={inputValue} 
                        onChange={(e) => {setInputValue(e.target.value)}}
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <MicNoneIcon className="chatBox__mic" />
                </IconButton>
            </div>
        </div>
    )
}
