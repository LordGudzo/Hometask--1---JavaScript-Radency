const DELETE = "DELETE";
const ARCHIV = "ARCHIV";
const UNARCHIV = "UNARCHIV";
const ADD_NOTE = "ADD_NOTE";
const EDIT_NOTE = "EDIT_NOTE";


const notes_redux = (state, action) => {
    switch (action.type) {
        case DELETE: {
            return {
                ...state,
                body: state.body.filter(e => e.id !== action.id),
                archivedNotes: [...state.archivedNotes]
            }
        }

        case ARCHIV: {            
            let newArchivObject = state.body.filter(e => e.id === action.id);
            return {
                ...state,
                body: state.body.filter(e => e.id !== action.id),
                archivedNotes: [...state.archivedNotes, ...newArchivObject]
            }
        }

        case UNARCHIV: {
            let unarchivObject = state.archivedNotes.filter(e => e.id === action.id);
            return {
                ...state,
                body: [...state.body, ... unarchivObject],
                archivedNotes: state.archivedNotes.filter(e => e.id !== action.id),
            }
        }

        case ADD_NOTE: {
            return {
                ...state,
                body: [...state.body, action.object]
            }
        }

        case EDIT_NOTE: {
            let bodyCopy = state.body.map((e) => {
                if (e.id === action.id) {
                    return action.object;
                }
                return e;
            })
            return {
                ...state,
                body: [... bodyCopy]
            }
        }
    }
}

export const deleteNoteAC = (id) => ({ type: DELETE, id: id });
export const archivNoteAC = (id) => ({ type: ARCHIV, id: id });
export const unarchivNoteAC = (id) => ({ type: UNARCHIV, id: id });
export const addNoteAC = (object) => ({ type: ADD_NOTE, object: object });
export const editNoteAC = (object, id) => ({ type: EDIT_NOTE, object: object, id: id });


export default notes_redux;