import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../hooks/useForm/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const {active: note} = useSelector(state => state.notes);

    const {url} = useSelector(state => state.notes.active);

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm(note);

    const {title, body} = values;

    const activeId = useRef( note.id );

    useEffect(() => {
        
        if( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id; 
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( values.id, {...values} ) );

    }, [dispatch, values])

    const handleDelete = () => {
        dispatch( startDeleting(note.id) );
    };

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    name="title" 
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    autoFocus
                    onChange={handleInputChange}
                    value={title}
                />

                <textarea 
                    name="body"
                    cols="30"
                    rows="10"
                    placeholder="What happened today"
                    className="notes__textarea"
                    onChange={handleInputChange}
                    value={body}
                ></textarea>

                {
                    url &&
                    <div className="notes__images">
                        <img
                            src={url}
                            alt="img-notes"
                        />
                    </div>
                }

            </div>

            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>

        </div>
    )
}
