import drawIconsForHeader from "./headerButtons/DrawIconsForHeader.js";
import drawIconsForBody from "./bodyButtons/DrawIconsForBody.js";
import drawAddButton from "./addButton/DrawAddButton.js";

let createLogicalButtons = (parrentNode) => {
    drawIconsForHeader();
    drawIconsForBody();
    drawAddButton(parrentNode);
}

export default createLogicalButtons;