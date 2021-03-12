import { types } from "../types/types"
import {facebookAuthProvider, firebase, githubAuthProvider, googleAuthProvider} from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        setTimeout(() => {
    
            dispatch( login(123, 'Nico') )
            
    
        }, 3500);
    
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
                console.log(`Error en la autenticacion ${err}`);
            })
    };
};

export const startFacebookLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then( ({user}) => {
                login( user.uid, user.displayName);
                // console.log(resp);
            })
            .catch( err => {
                console.log(`Error en la autenticacion. ${err}`);
            })
    };
};

export const startGithubLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(githubAuthProvider)
            .then( (result) => {
                // dispatch( login( user.uid, user.displayName ) )
                console.log(result);
            } )
            .catch( err => {
                console.log(`Error en la autenticacion ${err}`);
            })
    }
}



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