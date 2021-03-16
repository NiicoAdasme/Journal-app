import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

export const JournalEntry = ({ id, title, body, date, url }) => {

    const noteDate = moment( date );

    const dispatch = useDispatch();

    const handleActiveNote = () => {

        const note = {
            id,
            title,
            body,
            date,
            url
        };

        dispatch( activeNote(id, note) );

    };

    return (
        <div 
            className="journal__entry pointer animate__animated animate__fadeIn"
            onClick={handleActiveNote}
        >
            {
                url &&
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url( ${url} )`
                    }}
                ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>

        </div>
    )
}

JournalEntry.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
};
