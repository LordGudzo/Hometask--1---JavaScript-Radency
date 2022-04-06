import checkTextInputs from "../../common/checkTextInputs.js";
import createObjectForState from "../../common/createObjectForState.js";
import createEditInputsForm from "./CreateEditInputsForm.js";
import { dispatch, editNoteAC } from "../../../store/store.js";

let addEditElementLogical = () => {
    let notesBody = document.querySelectorAll('.notes_body');

    for (let i = 0; i< notesBody.length; i++) {
        let editBtn = notesBody[i].querySelector('.edit');
    
        editBtn.addEventListener('click',() => {
            editNote(notesBody[i])
        } );
    }
}

/**
 * creates edit form and adds "click" for send button
 * @editForm line for edit
 */
let editNote = (editForm) => { 
    createEditInputsForm(editForm); 
    let sendEditBtn = document.querySelector('.sendFormBtn');
    sendEditBtn.addEventListener('click', () => sendToState(editForm));        
}

function sendToState(editForm) { 
    let textForms = editForm.querySelectorAll('.textInput');
    let isNoEmpty = checkTextInputs(textForms);
   
    if (isNoEmpty) {
        const sendObject = createObjectForState(editForm.id);
        dispatch(editNoteAC(sendObject, editForm.id));
    }
  }

export default addEditElementLogical;