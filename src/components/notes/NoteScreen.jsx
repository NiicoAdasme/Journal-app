import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    name="note" 
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    name="description"
                    cols="30"
                    rows="10"
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__images">
                    <img
                        src="http://3.bp.blogspot.com/-0DGw9ozNm7o/T9Hw8__nF2I/AAAAAAAADvQ/DcG0PHBuQG0/s1600/SET_0355_0374.jpg"
                        alt="notes image"
                        
                    />
                </div>

            </div>

        </div>
    )
}
