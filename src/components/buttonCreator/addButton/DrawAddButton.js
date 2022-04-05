let drawAddButton = (parrentNode) => {
    let noteRoot = document.querySelector(parrentNode);
    let createNoteBtn = document.createElement('button');
    createNoteBtn.textContent = "Create Note";
    noteRoot.append(createNoteBtn);
}

export default drawAddButton;