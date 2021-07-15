import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import 'bootstrap/dist/css/bootstrap.min.css';
import './auth.css'

// Firebase
import firebase from "firebase"
import { auth } from '../../firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    background: "none"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "rgba(255, 88, 65, 50)",
  },
}));

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch(error => alert(error.message));
}

export default function SignIn({userChange}) {
  const classes = useStyles();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signin = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error.message))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={window.location.origin + '/fireIcon.png'} width="35px" height="35px" alt="" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signin}
          >
            Sign In
          </Button>
          <div className="google__auth">
              <Button variant="outlined" color="primary" className="sign-in" onClick={signInWithGoogle}>
                <i className="fa fa-google"></i>&nbsp; Join Using Google
              </Button>
              <p className="guideLine">Do not violate the community guidelines or you will be banned for life!</p>
          </div>
          <Grid container>
            <Grid item>
              <Link className="text-center signup__link" href="#/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
