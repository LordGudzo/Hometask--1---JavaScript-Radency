import { state } from "../../../store/store.js";


let createInputsForm = () => {
    let tBody = document.querySelector('.notes_tbody');
    let tr = document.createElement('tr');

    let textInputsArray = state.notes.textInputsArray;
    createTextInputs(textInputsArray, tr); 

    const selectArray = state.notes.selectArray;
    let selectList = createSelectList(selectArray);
    tr.append(selectList);

    let addNoteButton = createAddNoteButton();
    tr.append(addNoteButton)
    tBody.append(tr);
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

let createSelectList = (selectArray) => {
    let result = document.createElement('td');

    //Create and append select list
    let selectList = document.createElement("select");
    selectList.classList.add("category");    
    
    //Create and append the options
    for (let i = 0; i < selectArray.length; i++) {
        let option = document.createElement("option");
        option.value =selectArray[i];
        option.text = selectArray[i];
        selectList.appendChild(option);
    }
    result.appendChild(selectList);

    return result;
}

let createAddNoteButton = () => {
    let button = document.createElement('button');
    button.textContent = "Add Note";
    button.classList.add("addNoteBtn");
    return button;
}

export default createInputsForm;