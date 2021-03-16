import React, { useEffect, useState } from 'react'
import { 
    BrowserRouter as Router,
    Redirect,
    Switch,

} from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import LoadingScreen from 'react-loading-screen';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';


export const AppRouter = () => {

    const dispatch = useDispatch();

    //  cheking true = loading / false = not loading
    const [cheking, setCheking] = useState(true);

    // isLoggedIn false = no logged / true = logged
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async(user) => {

            if( user?.uid ){
                dispatch( login(user.uid, user.displayName) );

                setIsLoggedIn( true );

                dispatch( startLoadingNotes( user.uid) );
            }else{
                setIsLoggedIn( false );
            }

            setCheking( false );

        })
        
    }, [dispatch, setCheking, setIsLoggedIn])

    if( cheking ){
        return (
            <LoadingScreen
                loading={true}
                bgColor='#676767'
                spinnerColor='#9ee5f8'
                textColor='#f1f1f1'
                text='Loading...'
                children=''
        /   >
        );
    }
    
    

    return (
        <Router>

           <div>
               <Switch>
                    <PublicRoute 
                        isAuthenticated={isLoggedIn}
                        path="/auth"
                        component={AuthRouter}
                    />

                    <PrivateRoute
                        isAuthenticated={isLoggedIn}
                        exact
                        path="/"
                        component={JournalScreen}
                    />


                    <Redirect to="/auth/login" />
               </Switch>
           </div>

        </Router>
    )
}
