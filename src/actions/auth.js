import { types } from "../types/types"
import {
    firebase,
    facebookAuthProvider,
    githubAuthProvider,
    googleAuthProvider
} from '../firebase/firebase-config';
import { uiFinishLoading, uiStartLoading } from "./ui";
import Swal from 'sweetalert2';
import { notesLogout } from "./notes";


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch( uiStartLoading() );

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                dispatch( uiFinishLoading() );

                dispatch( login(user.uid, user.displayName) );
            })
            .catch( err => {
                dispatch( uiFinishLoading() );
                // console.log(err);
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            })
    
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) => {
                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch( err => {
                // console.log(err);
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            })
    };
};

export const startFacebookLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then( ({user}) => {
                dispatch( login( user.uid, user.displayName) );
                // console.log(resp);
            })
            .catch( err => {
                // console.log(err);
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            })
    };
};

export const startGithubLogin = () => {

    return (dispatch) => {
        firebase.auth().signInWithPopup(githubAuthProvider)
            .then( ({user}) => {
                dispatch( login( user.uid, user.displayName ) );
                // console.log(result);
            } )
            .catch( err => {
                // console.log(err);
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            })
    }
}

export const signOut = () => {
    return (dispatch) => {
        firebase.auth().signOut()
            .then( () => {
                dispatch( logout() );
                dispatch( notesLogout() );
            })
            .catch( err => {
                throw err;
            })
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    } 
})

export const logout = () => ({
    type: types.logout
});

export const startRegisterWithEmailPasswordName = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({user}) => {
                await user.updateProfile({
                    displayName: name
                  });
                dispatch( login(user.uid, user.displayName) );
            })
            .catch( err => {
                // console.log(err);
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            })
    };
};

