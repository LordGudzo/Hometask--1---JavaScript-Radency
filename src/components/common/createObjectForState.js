import getData from "./getData.js";
import store from "../../store/store.js";

//summ all value and returns object
function createObjectForState (id = (store.getState().notes.body.length + 1)) {
    let result = {};
    result.id = "" + (id);

    result.created = getData();

    result.category = document.querySelector(".category").value;

    result.dates = "";

    let textInputs = store.getState().notes.textInputsArray;
    for (let i = 0; i < textInputs.length; i++) {
        let text = document.querySelector("." + textInputs[i]).value;
        result[textInputs[i]] = text;
    }

    return result;
} 

export default createObjectForState;