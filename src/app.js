import { archivNoteAC, deleteNoteAC, dispatch, state } from "./store/store.js";
import DataTable from "./components/tableCreator/CreateTable.js";  
import createLogicalButtons from "./components/buttonCreator/CreateLogicalButtons.js";

//=======================================
let deleteElement = (id) => {
    dispatch(deleteNoteAC(id)); 
}

let addDeleteLogical = () => {
    let notesBody = document.querySelectorAll('.notes_body');
    for (let i = 0; i< notesBody.length; i++) {
        let deleteBtn = notesBody[i].querySelector('.delete');
        deleteBtn.addEventListener('click',() => {
            deleteElement(notesBody[i].id)
        } );
    }
}
//============================================
let archiveElement = (id) => {
    dispatch(archivNoteAC(id));
}

let addArchiveLogical = () => {
    let notesBody = document.querySelectorAll('.notes_body');
    for (let i = 0; i< notesBody.length; i++) {
        let deleteBtn = notesBody[i].querySelector('.archiv');

        deleteBtn.addEventListener('click',() => {
            archiveElement(notesBody[i].id);
        } );
    }
}
//===============================

let drawTables = () => {
    document.querySelector("#noteTable").innerHTML='';
    DataTable(state.notes.title, state.notes.body, "#noteTable", "notes");
    //DataTable(state.category.title, state.category.body, "#summaryTable", "summary");
    createLogicalButtons('#noteTable');
    addDeleteLogical();
    addArchiveLogical();
}

drawTables();

export default drawTables;















