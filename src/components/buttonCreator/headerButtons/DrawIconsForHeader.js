import drawBtn from "../drawBtn/DrawButton.js";

let drawIconsForHeader = () => {
    let notes = document.querySelector(".notes");
    let th = document.createElement('th');
//    let deleteBtn = drawBtn("delete");
    let archiveBtn = drawBtn("archiv");
    th.append(archiveBtn);
//    th.append(deleteBtn);
    notes.append(th);
}

export default drawIconsForHeader;