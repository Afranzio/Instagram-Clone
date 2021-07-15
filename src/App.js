import React, { useEffect, useState } from 'react';
import ChatVia from './components/mainApp/chatVia';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import SignIn from './components/auth/login';

// React-Router
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'


// Components

// Styles
import './App.css';
import db, { auth }  from './firebase';
import firebase  from 'firebase';
import SignUp from './components/auth/signup';
import Feed from './components/feed/home';
import NavAndFooter from './components/navAndFooter/navAndFooter';
import FooterContainer from './components/navAndFooter/Footer';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([])

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // user logged in
        dispatch(login({
          uid: authUser.uid,
          photoURL: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
        db.collection("Instagram-Clone").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
          setPosts(
            snapshot.docs.map((doc) => ({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              id: doc.id,
              post: doc.data(),
            }))
          );
        });
      } else {
        // user logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <NavAndFooter user={user} />
        <Switch>
          <Route exact path="/">
            {user ? <Feed posts={posts} user={user} /> : <Redirect to="/login" /> }
          </Route>
          <Route path="/chatRoom">
            {user ? <ChatVia /> : <Redirect to="/login" /> }
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <SignIn />}
          </Route>
          <Route path="/signup">
            {user ? <Redirect to="/" /> : <SignUp />}
          </Route>
          <Route path="/chat">
            <ChatVia />
          </Route>
        </Switch>
        <FooterContainer />
      </div>
    </Router>
  );
}

export default App;
