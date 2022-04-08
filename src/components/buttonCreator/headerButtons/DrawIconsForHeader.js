import drawBtn from "../drawBtn/DrawButton.js";

let drawIconsForHeader = () => {
    let notes = document.querySelector(".notes");
    let th = document.createElement('th');
    th.classList.add("th_icon")
    let archiveBtn = drawBtn("archiv");
    th.append(archiveBtn);
    let showText = document.createElement('span');
    showText.innerHTML = "Show Archive"
    th.append(showText)

    notes.append(th);
}

export default drawIconsForHeader;