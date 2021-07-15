import React,{ useState, useEffect } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import QuestionAnswerTwoToneIcon from '@material-ui/icons/QuestionAnswerTwoTone';

import db from '../../firebase'



const Footer = ( {username, postId, command} ) => {
    const [like, setLike] = useState(true)
    const [comments, setComments] = useState([])

    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db.collection("Instagram-Clone")
                            .doc(postId)
                            .collection("comments")
                            .orderBy('timestamp', 'desc')
                            .onSnapshot((snapshot) => {
                                setComments(snapshot.docs.map((doc) => (doc.data()))
                                );
                            });
        }
        return () => {
            unsubscribe();
        }
    }, [postId])

    const liked = () => {
        setLike(!like)
    }

    return(
        <div className='footer'>
            <div>
            {like? <FavoriteBorderIcon onClick={liked} /> : <FavoriteIcon onClick={liked} />}
            <QuestionAnswerTwoToneIcon />
            </div>
            <div className="command">
                <span>{command}</span>
            </div>
            <div className='comment-session'>
                {comments.map((comment) => (
                    <p>
                        <b>{comment.username}</b>{comment.text}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Footer;