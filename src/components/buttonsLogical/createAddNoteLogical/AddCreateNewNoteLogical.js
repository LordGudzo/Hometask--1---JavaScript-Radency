import { addNoteAC } from "../../../redux/notes_redux.js";
import store from "../../../store/store.js";
import checkTextInputs from "../../common/checkTextInputs.js";
import createObjectForState from "../../common/createObjectForState.js";
import createInputsForm from "./CreateInputsForm.js";

/**adds logical for CreateNote button. Creates inputs form and then adds value from this form to state */
function addCreateNewNoteLogical() {
    let addFormBtn = document.querySelector('.addBtn'); 
    addFormBtn.addEventListener('click', () => getLogicalForAddFormBtn());
  }


  function getLogicalForAddFormBtn() { 
    let tBody = document.querySelector('.notes_tbody');
    let inputsForm = createInputsForm();
    tBody.append(inputsForm);

    let addNoteBtn = document.querySelector('.addNoteBtn'); 
    addNoteBtn.addEventListener('click', () => sendToState());  
    
  }

  function sendToState() { 
    let textForms = document.querySelectorAll('.textInput');
    let isNoEmpty = checkTextInputs(textForms);
    
    if (isNoEmpty) {
        let note = createObjectForState();
        store.dispatch(addNoteAC(note));
    }
  }



export default addCreateNewNoteLogical;