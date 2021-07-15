import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const Header = ( {username, location} ) => {
    return(
        <div className='header'>
            <div className='poster'>
                <Avatar alt={username} src='/static/images/avatar/1.png' />
                <div className="id">
                    {console.log(username)}
                    <h5>{username}</h5>
                    <small>{location}</small>
                </div>
            </div>
        </div>
    );
}

export default Header;