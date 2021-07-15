import React from 'react'
import Post from '../post/Post';
import ImageUploader from '../ImageUpload/imageUpload';

export default function Feed({posts, user}) {
    return (
        <div>
            <div className='container'>
                <div className="App">
                    <div className='upload-container'>
                        {user ? <ImageUploader username={user.displayName} /> : ''}
                    </div>
                    <div className='background'>
                        {
                            posts.map(({ id, post }) => (
                                <Post
                                    key={id}
                                    postId={id}
                                    username={post.username}
                                    location={post.location}
                                    imageURL={post.imageURL}
                                    command={post.command}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
