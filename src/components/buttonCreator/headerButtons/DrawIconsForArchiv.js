import drawBtn from "../../common/DrawButton.js";

/**
 * 
 * @isArchive boolean. If true draw icon for notesTable, else for archivTable
 */
let drawIconsForHeader = (isArchive) => {
    let notes = document.querySelector(".notes");
    let th = document.createElement('th');
    th.classList.add("th_icon");
    let archiveBtn = drawBtn("archiv");
    th.append(archiveBtn);
    let showText = document.createElement('span');
    isArchive ? showText.innerHTML = "Show Archive" : showText.innerHTML = "Back"
    
    th.append(showText);

    notes.append(th);
}

export default drawIconsForHeader;