import React from 'react'
import { AppRouter } from './routers/AppRouter.jsx'
import { Provider } from 'react-redux';
import { store } from './store/store.js';

export const JournalApp = () => {
    return (
        <Provider store={store} >

            <AppRouter/>
        
        </Provider>
    )
}
