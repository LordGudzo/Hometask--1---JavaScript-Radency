import addArchiveLogical from "./archivesLogical/ArchivElementLogical.js";
import addDeleteLogical from "./DeleteElementLogical.js";
import addShowArchiveLogical from "./archivesLogical/ShowArchiveLogical.js";
import addCreateNewNoteLogical from "./createAddNoteLogical/AddCreateNewNoteLogical.js";
import addEditElementLogical from "./editLogical/EditElementLogical.js";

function summaryForLogical() {
    addDeleteLogical();
    addArchiveLogical();
    addShowArchiveLogical();
    addCreateNewNoteLogical();
    addEditElementLogical();
}

export default summaryForLogical;