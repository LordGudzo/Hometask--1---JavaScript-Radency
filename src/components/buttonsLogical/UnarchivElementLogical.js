import { unarchivNoteAC, dispatch } from "../../store/store.js";

let unarchiveElement = (id) => {
    dispatch(unarchivNoteAC(id));
}

let addUnarchiveLogical = () => {
    let notesBody = document.querySelectorAll('.notes_body');
    for (let i = 0; i< notesBody.length; i++) {
        let deleteBtn = notesBody[i].querySelector('.archiv');

        deleteBtn.addEventListener('click',() => {
            unarchiveElement(notesBody[i].id);
        } );
    }
}

export default addUnarchiveLogical;