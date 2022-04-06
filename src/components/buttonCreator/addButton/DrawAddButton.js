let drawAddButton = (parrentNode) => {
    let noteRoot = document.querySelector(parrentNode);
    let createNoteBtn = document.createElement('button');
    createNoteBtn.textContent = "Create Note";
    createNoteBtn.classList.add("addBtn")
    noteRoot.append(createNoteBtn);
}

export default drawAddButton;