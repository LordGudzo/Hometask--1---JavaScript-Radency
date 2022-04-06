import { viewingArchiveAC, dispatch, state } from "./store/store.js";
import DataTable from "./components/tableCreator/CreateTable.js";  
import createLogicalButtons from "./components/buttonCreator/CreateLogicalButtons.js";
import addDeleteLogical from "./components/buttonsLogical/DeleteElementLogical.js";
import addArchiveLogical from "./components/buttonsLogical/ArchivElementLogical.js";
import addShowArchiveLogical from "./components/buttonsLogical/AddShowArchiveLogical.js";
import drawIconsForUnarchiveNote from "./components/buttonCreator/archiveButton/DrawIconsForArchive.js";
import addUnarchiveLogical from "./components/buttonsLogical/UnarchivElementLogical.js";
import drawIconsForHeader from "./components/buttonCreator/headerButtons/DrawIconsForHeader.js";
import addCloseArchiveLogical from "./components/buttonsLogical/AddCloseArchiveLogical.js";
import addCreateNewNoteLogical from "./components/buttonsLogical/createAddNoteLogical/AddCreateNewNoteLogical.js";


let drawTables = (body) => {
    document.querySelector("#noteTable").innerHTML='';
    document.querySelector("#summaryTable").innerHTML='';
    DataTable(state.notes.title, body, "#noteTable", "notes");
    DataTable(state.category.title, state.category.body, "#summaryTable", "summary");
    createLogicalButtons('#noteTable');
    addDeleteLogical();
    addArchiveLogical();
    addShowArchiveLogical();
    addCreateNewNoteLogical();
  
}

drawTables(state.notes.body);

export default drawTables;


export let showArchive = (body) => {
    document.querySelector("#noteTable").innerHTML='';
    document.querySelector("#summaryTable").innerHTML='';
    DataTable(state.notes.title, body, "#noteTable", "notes");
    drawIconsForUnarchiveNote();
    addUnarchiveLogical();
    drawIconsForHeader();
    addCloseArchiveLogical();
}




 










