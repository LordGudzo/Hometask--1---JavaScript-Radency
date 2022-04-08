import createHeaderForTable from "./CreateHeader.js";
import createBodyForTable from "./CreateBody.js";

/**
 * @title values for title (thead)
 * @body  values for body (tbody)
 * @parrentNode place from html for table
 * @className name for table class
 */
function CreateTable(title, body, parrentNode, className) {
    let nodeForTable = document.querySelector(parrentNode);
    let table = document.createElement('table');
    let thead = createHeaderForTable(title, className);
    let tBody = createBodyForTable(title, body, className);   
    table.append(thead);
    table.append(tBody);
    nodeForTable.appendChild(table);
  }  
  
 
  export default CreateTable;