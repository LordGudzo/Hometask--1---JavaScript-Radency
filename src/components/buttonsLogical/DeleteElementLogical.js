

let deleteElement = (id) => {
    dispatch(deleteNoteAC(id));
    document.querySelector("#noteTable").innerHTML='';
    DataTable(state.notes.title, state.notes.body, "#noteTable", "notes");
    createLogicalButtons('#noteTable');
    addDeleteLogical();
    addArchiveLogical();    
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

export default addDeleteLogical;