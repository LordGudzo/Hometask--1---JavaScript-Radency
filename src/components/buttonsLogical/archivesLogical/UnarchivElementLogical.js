import { unarchivNoteAC } from "../../../redux/notes_redux.js";
import store from "../../../store/store.js";


let addUnarchiveLogical = () => {
    let notesBody = document.querySelectorAll('.notes_body');
    for (let i = 0; i< notesBody.length; i++) {
        let deleteBtn = notesBody[i].querySelector('.archiv');

        deleteBtn.addEventListener('click',() => {
            unarchiveElement(notesBody[i].id);
        } );
    }
}

let unarchiveElement = (id) => {
    store.dispatch(unarchivNoteAC(id));
 }

export default addUnarchiveLogical;