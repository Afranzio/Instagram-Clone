import React from 'react';
import Button from '@material-ui/core/Button';
import { auth } from '../../firebase';

import { makeStyles } from '@material-ui/core/styles';
import ForumIcon from '@material-ui/icons/Forum';

import './navbar.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    margin: '15px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Navbar = ({ user }) => {

  const classes = useStyles();

  return (
    <div className='navbar fixed-top'>
      <div className="container">
        <a href="#/">
          <img src={window.location.origin + '/logo.png'} alt="" className="logo" />
        </a>
        {user ? (
          <div>
            <Button
              className={classes.btn}
              size='small'
              onClick={() => window.location = `#/chat`}
            >
              <ForumIcon />
            </Button>
            <Button
              className={classes.btn}
              size='small'
              onClick={() => auth.signOut()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="auth__btn">
            <Button
              className={classes.btn}
              onClick={() => window.location = "#/signup"}
            >
              Sign Up
            </Button>
            <Button
              className={classes.btn}
              onClick={() => window.location = "#/login"}
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;