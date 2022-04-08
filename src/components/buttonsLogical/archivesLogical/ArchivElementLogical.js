import { archivNoteAC } from "../../../redux/notes_redux.js";
import store from "../../../store/store.js";

let archiveElement = (id) => {
    store.dispatch(archivNoteAC(id));
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