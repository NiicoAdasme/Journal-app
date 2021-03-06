import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2';
import { fileUpload } from "../helpers/fileUpload";

// react-journal

export const startNewNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            url: '',
            date: new Date().getTime()
        };

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch( activeNote(doc.id, newNote) );

        dispatch( addNewNote(doc.id, newNote) );
    };
};

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));
    };
};

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes

});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        !note.url && delete note.url

        const noteToFireStore = { ...note };

        delete noteToFireStore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFireStore)
            .then(() => {
                dispatch(startLoadingNotes(uid));
                dispatch( refreshNote(note.id, note) );
                Swal.fire(
                    'Note Saved!',
                    '',
                    'success'
                )
            })
            .catch(err => {
                console.log(err);
            })

        dispatch(refreshNote(note.id, noteToFireStore));
    };
};

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});


export const startUploading = (file) => {
    return async (dispatch, getState) => {

        const { active: note } = getState().notes;

        const { uid } = getState().auth

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);

        note.url = fileUrl;

        dispatch(startSaveNote(note));

        dispatch(startLoadingNotes(uid));

        dispatch(refreshNote(note.id, note))

        Swal.close();

    };
};

export const startDeleting = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( async(result) => {
            if (result.isConfirmed) {
                await db.doc(`${uid}/journal/notes/${id}`).delete()
                    .then( () => {
                        dispatch(deleteNote(id));

                        Swal.fire(
                            'Deleted!',
                            'Your note has been deleted.',
                            'success'
                        )
                    })
                    .catch(err => {
                        throw err;
                    })
            }
        })        
    };
};

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});


export const notesLogout = () => ({
    type: types.notesLogoutClearing
});