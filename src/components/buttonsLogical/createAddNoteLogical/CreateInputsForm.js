import store from "../../../store/store.js";
import createSelectList from "../../common/createSelectList.js";

/**
 * Create text inputs and select depending on state. And 
 * @returns line for table (tr) with inputs
 */
function createInputsForm() {
    let tr = document.createElement('tr');

    let textInputsArray = store.getState().notes.textInputsArray;
    createTextInputs(textInputsArray, tr); 

    
    let selectList = createSelectList(store.getState().notes.selectArray);
    tr.append(selectList);

    let addNoteButton = createAddNoteButton();
    tr.append(addNoteButton)
    
    return tr;
}


let createTextInputs = (textInputsArray, tr) => {    
    for (let i = 0; i < textInputsArray.length; i++) {    
        let td = document.createElement('td');
        let input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('placeholder', textInputsArray[i]);
        input.classList.add('textInput', textInputsArray[i]); 
        td.append(input);
        tr.append(td);
      }
}

let createAddNoteButton = () => {
    let td_button = document.createElement('td')
    let button = document.createElement('button');
    button.textContent = "Add Note";
    button.classList.add("addNoteBtn");
    td_button.append(button)
    return td_button;
}

export default createInputsForm;