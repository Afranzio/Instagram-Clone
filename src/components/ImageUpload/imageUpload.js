import React,{useState} from 'react'
import {Input, Button} from '@material-ui/core'

import  firebase  from "firebase";
import db, { storage } from "../../firebase";


export default function ImageUpload({username}) {

    const [caption, setCaption] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)

    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        if(username !== null){
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    //prograss Bar Math
    
                    const progress = Math.round(
                        snapshot.bytesTransferred/ snapshot.totalBytes * 100
                    );
    
                    setProgress(progress)
                },
                (error) => {
                    console.log(error);
                    alert(error.message)
                },
    
                ()=> {
                    storage
                        .ref('images')
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            //post it in Db
                            db.collection('Instagram-Clone').add({
                                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                                imageURL: url,
                                command: caption,
                                username: username,
                                location: location
                            });
    
                            setProgress(0)
                            setCaption('')
                            setLocation('')
                            setImage('')
                        })
                }
            )
        }
        setProgress(0)
        setCaption('')
        setLocation('')
        setImage('')
    }
    return (
        <div className="uploadContainer">
            <progress id="progressBar" value={progress} max='100' />
            <Input className="inputCaption" type='text' placeholder="Enter Caption" onChange={e=>setCaption(e.target.value)} />
            <Input className="inputLocation" type='text' placeholder="Location" onChange={e=>setLocation(e.target.value)} />
            <input id="inputFile" className="inputFile" type='file' accept='image/jpeg, image/png' onChange={handleChange} />
            <Button className="upload_btn" onClick={handleUpload} >Create Post</Button>
        </div>
    )
}
