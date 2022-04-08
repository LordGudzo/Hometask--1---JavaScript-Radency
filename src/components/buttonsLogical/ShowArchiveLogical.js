import { viewingArchiveAC, dispatch } from "../../store/store.js";

let addShowArchiveLogical = () => {
    let showArchiveBtn = document.querySelector('.notes').querySelector('.th_icon');

    let deleteElement = () => {   
        dispatch(viewingArchiveAC());
    }
    showArchiveBtn.addEventListener("click", () => deleteElement());
}

export default addShowArchiveLogical;