import store from "../../../store/store.js";
import drawIconsForHeader from "../../buttonCreator/headerButtons/DrawIconsForArchiv.js";
import drawIconsForUnarchiveNote from "../../buttonCreator/headerButtons/DrawIconsForUnarchive.js";
import CreateTable from "../../tableCreator/CreateTable.js";
import addCloseArchiveLogical from "./CloseArchiveLogical.js";
import addUnarchiveLogical from "./UnarchivElementLogical.js";

let addShowArchiveLogical = () => {
    let showArchiveBtn = document.querySelector('.notes').querySelector('.th_icon');

    showArchiveBtn.addEventListener("click", () => showArchivTable());

    let showArchivTable = () => {   
        document.querySelector("#noteTable").innerHTML='';
        document.querySelector("#summaryTable").innerHTML='';

        CreateTable(store.getState().notes.title, store.getState().notes.archivedNotes,
                     "#noteTable", "notes");

        drawIconsForUnarchiveNote();
        addUnarchiveLogical();
        drawIconsForHeader(false);
        addCloseArchiveLogical();
    }
    
}

export default addShowArchiveLogical;