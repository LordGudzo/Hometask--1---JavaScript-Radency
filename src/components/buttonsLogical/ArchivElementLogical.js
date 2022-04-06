import { archivNoteAC, dispatch } from "../../store/store.js";

let archiveElement = (id) => {
    dispatch(archivNoteAC(id));
}

let addArchiveLogical = () => {
    let notesBody = document.querySelectorAll('.notes_body');
    for (let i = 0; i< notesBody.length; i++) {
        let deleteBtn = notesBody[i].querySelector('.archiv');

        deleteBtn.addEventListener('click',() => {
            archiveElement(notesBody[i].id);
        } );
    }
}

export default addArchiveLogical;