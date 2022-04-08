import drawTables from "../../../app.js";

let addCloseArchiveLogical = () => {
    let showArchiveBtn = document.querySelector('.notes').querySelector('.th_icon');
    showArchiveBtn.addEventListener("click", () => backToTables());

    let backToTables = () => {
        document.querySelector("#noteTable").innerHTML='';   
        drawTables();
    }
    
}

export default addCloseArchiveLogical;