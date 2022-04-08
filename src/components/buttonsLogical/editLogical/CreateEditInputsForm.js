import createSelectList from "../../common/createSelectList.js";
/**
 * Creates 2 text, 1 select inputs and edit button
 * @editForm line for edit 
 */
function createEditInputsForm(editForm, selectArray) {
    let nameForm = editForm.querySelector('.td_name');
    let nameInput = getEditInput(nameForm.innerHTML, "name");
    nameForm.innerHTML = "";
    nameForm.append(nameInput);
    
    let contentForm = editForm.querySelector('.td_content');
    let contenInput = getEditInput(contentForm.innerHTML, "content");
    contentForm.innerHTML = "";
    contentForm.append(contenInput);

    let categoryForm = editForm.querySelector('.td_category');
    let categorySelect = createSelectList(selectArray);
    categoryForm.innerHTML = "";
    categoryForm.append(categorySelect);

    let icons = editForm.querySelector('.td_icons');
    icons.classList.remove("td_icons")
    let sendFormBtn = createEditButton();
    icons.innerHTML = "";
    icons.append(sendFormBtn);
}

let getEditInput = (textFromContent, fieldName) => {
    let input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('value', textFromContent);
        input.classList.add(fieldName, "textInput"); 

    return input;
}

let createEditButton = () => {
    let button = document.createElement('button');
    button.textContent = "Edit";
    button.classList.add("sendFormBtn");
    return button;
}

export default createEditInputsForm;