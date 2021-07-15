import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUQxYke3F48F89cID62ZcaZA_K90o8MxM",
    authDomain: "instagram-clone-app-579d5.firebaseapp.com",
    databaseURL: "https://instagram-clone-app-579d5.firebaseio.com",
    projectId: "instagram-clone-app-579d5",
    storageBucket: "instagram-clone-app-579d5.appspot.com",
    messagingSenderId: "188534036993",
    appId: "1:188534036993:web:a8006dd99af7c1c113be00",
    measurementId: "G-258D4K6DBW"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, provider };
export default db;