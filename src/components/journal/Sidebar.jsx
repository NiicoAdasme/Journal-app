import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { logout } from '../../actions/auth'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const handleLogout = () => {
        
        dispatch( logout() );
        history.push('/auth/login');
    }

    return (
        <aside className="journal__sidebar">
            <div className="jounal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Nicolas</span>
                </h3>

                <button 
                    className="btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New Entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
