import { closeArchiveAC, dispatch } from "../../store/store.js";

let addCloseArchiveLogical = () => {
    let showArchiveBtn = document.querySelector('.notes').querySelector('.archiv');

    let deleteElement = () => {   
        dispatch(closeArchiveAC());
    }
    showArchiveBtn.addEventListener("click", () => deleteElement());
}

export default addCloseArchiveLogical;