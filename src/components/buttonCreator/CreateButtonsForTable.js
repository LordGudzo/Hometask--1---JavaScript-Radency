import drawIconsForHeader from "./headerButtons/DrawIconsForArchiv.js";
import drawIconsForBody from "./bodyButtons/DrawIconsForBody.js";
import drawAddButton from "./addButton/DrawAddButton.js";

function CreateButtonsForTable(parrentNode) {
    drawIconsForHeader(true);
    drawIconsForBody();
    drawAddButton(parrentNode);
}

export default CreateButtonsForTable;