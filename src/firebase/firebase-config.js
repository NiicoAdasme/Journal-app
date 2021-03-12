import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACxO5-Rj9UCcRcUiPs0LhRe0erK1Yvytk",
    authDomain: "react-app-curso-d5704.firebaseapp.com",
    projectId: "react-app-curso-d5704",
    storageBucket: "react-app-curso-d5704.appspot.com",
    messagingSenderId: "191971322294",
    appId: "1:191971322294:web:1a4e2ec5cf215533d4b917",
    measurementId: "G-ZHS57JKJ7N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    githubAuthProvider,
    firebase
}