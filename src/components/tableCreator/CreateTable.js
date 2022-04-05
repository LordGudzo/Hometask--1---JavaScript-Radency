import createHeaderForTable from "./CreateHeader.js";
import createBodyForTable from "./CreateBody.js";

/* Main function creates table according to values from config and data variables */
function DataTable(title, body, parrentNode, className) {
    let userTable = document.querySelector(parrentNode);

    let table = document.createElement('table');
    let thead = createHeaderForTable(title, className);
    let tBody = createBodyForTable(title, body, className);   
    table.append(thead);
    table.append(tBody);
    userTable.appendChild(table);
  }  
  
 
  export default DataTable;