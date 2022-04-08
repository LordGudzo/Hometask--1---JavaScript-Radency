import { deleteNoteAC } from "../../redux/notes_redux.js";
import store from "../../store/store.js";

let addDeleteLogical = () => {
    let notesBody = document.querySelectorAll('.notes_body');
    for (let i = 0; i< notesBody.length; i++) {
        let deleteBtn = notesBody[i].querySelector('.delete');
        deleteBtn.addEventListener('click',() => {
            deleteElement(notesBody[i].id)
        } );
    }
}

let deleteElement = (id) => {
    store.dispatch(deleteNoteAC(id)); 
}

export default addDeleteLogical;