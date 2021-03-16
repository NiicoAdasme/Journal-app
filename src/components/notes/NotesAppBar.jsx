import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
    
    const dispatch = useDispatch();

    const date = moment().format('LL');

    const { active } = useSelector(state => state.notes);

    const [hour, setHour] = useState(moment().format('LTS')); 

    setTimeout(() => {
        setHour(moment().format('LTS'))
    }, 1000);

    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    };

    const handlePicture = () => {
        document.querySelector('#fileSelector').click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if( file ){
            dispatch( startUploading( file ) );
        }
    };

    return (
        <div className="notes__appbar">
            <span>{ date }</span>
            <span>{hour}</span>

            <input 
                type="file"
                id="fileSelector"
                name="file"
                style={{ display: 'none'}}
                onChange={handleFileChange}
            />
        
            <div>
                <button 
                    className="btn"
                    onClick={handlePicture}
                >
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
