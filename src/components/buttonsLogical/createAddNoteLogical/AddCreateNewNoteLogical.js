import { state, dispatch, addNoteAC } from "../../../store/store.js";
import createInputsForm from "./createInputsForm.js";

function addCreateNewNoteLogical() {
    let addFormBtn = document.querySelector('.addBtn'); 
    addFormBtn.addEventListener('click', () => getLogicalForAddFormBtn());
  }


  function getLogicalForAddFormBtn() { 
    createInputsForm();
    
    let addNoteBtn = document.querySelector('.addNoteBtn'); 
    addNoteBtn.addEventListener('click', () => getLogicalForAddNoteBtn());  
    
  }

  function getLogicalForAddNoteBtn() { 
    let textForms = document.querySelectorAll('.textInput');
    let isNoEmpty = checkTextInputs(textForms);
    
    if (isNoEmpty) {
        let note = createObjectForState();
        dispatch(addNoteAC(note));
    }
  }

let createObjectForState = () => {
    let result = {};
    result.id ="" + state.notes.body.length + 1;
    result.created = getData();
    result.category = document.querySelector(".category").value;
    result.dates = "";

    let textInputs = state.notes.textInputsArray;

    for (let i = 0; i < textInputs.length; i++) {
        let text = document.querySelector("."+textInputs[i]).value;
        result[textInputs[i]] = text;
    }

    return result;
}
  

let getData = () => {
   const data = new Date();
   const year = data.getFullYear();
   let month = data.getMonth() + 1;  //getMonth() return 0-11 so +1
   month = parsNumberToMonthName(month);
   const day = data.getDate();
   
   return (month + " " + day + ", " + year)
}

let parsNumberToMonthName = (monthNumber) => {
    switch(monthNumber) {
        case 1: {
            return "January"
        }
        case 2: {
            return "February"
        }
        case 3: {
            return "March"
        }
        case 4: {
            return "April"
        }
        case 5: {
            return "May"
        }
        case 6: {
            return "June"
        }
        case 7: {
            return "July"
        }
        case 8: {
            return "August"
        }
        case 9: {
            return "September"
        }
        case 10: {
            return "October"
        }
        case 11: {
            return "November"
        }
        case 12: {
            return "December"
        }
        default: {
            alert('error')
        }
    }
}



/**
 * If field isn't filled add class empty and return false.
 * @returns true if all fields are filled
 */
function checkTextInputs(inputs) {
let check = 0;
for (let i = 0; i < inputs.length; i++){    
    if (inputs[i].value.length === 0){
    inputs[i].classList.add('empty');
    check++;
    } else {
    inputs[i].classList.remove('empty')
    }
}

if (check !== 0) {
    return false;
} else {
    return true;
}
}

  export default addCreateNewNoteLogical;