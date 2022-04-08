import store from "./store/store.js";
import CreateTable from "./components/tableCreator/CreateTable.js";  
import CreateButtonsForTable from "./components/buttonCreator/CreateButtonsForTable.js";
import summaryForLogical from "./components/buttonsLogical/summaryForLogical.js";



let drawTables = () => {
    store.summaryCount(); 
    store.parserContentData();
    document.querySelector("#noteTable").innerHTML='';
    document.querySelector("#summaryTable").innerHTML='';
    CreateTable(store.getState().notes.title, store.getState().notes.body, "#noteTable", "notes");
    CreateTable(store.getState().category.title, store.getState().category.body, "#summaryTable", "summary");
    CreateButtonsForTable('#noteTable');
    summaryForLogical();
}


try {    
    drawTables(store.getState().notes.body); 
} catch(e) {
    console.log(e)
}



export default drawTables;






 










