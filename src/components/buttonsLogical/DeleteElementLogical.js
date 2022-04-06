import { deleteNoteAC, dispatch } from "../../store/store.js";

let deleteElement = (id) => {
    dispatch(deleteNoteAC(id)); 
}

let addDeleteLogical = () => {
    let notesBody = document.querySelectorAll('.notes_body');
    for (let i = 0; i< notesBody.length; i++) {
        let deleteBtn = notesBody[i].querySelector('.delete');
        deleteBtn.addEventListener('click',() => {
            deleteElement(notesBody[i].id)
        } );
    }
}

export default addDeleteLogical;