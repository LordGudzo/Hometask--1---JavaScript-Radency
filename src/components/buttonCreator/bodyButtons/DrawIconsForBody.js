import drawBtn from "../drawBtn/DrawButton.js";

let drawIconsForBody = () => {
    let notesBody = document.querySelectorAll('.notes_body');
    
    for (let i = 0; i< notesBody.length; i++) {
          
        let td = document.createElement('td');
    
        let deleteBtn = drawBtn("delete");    
        let archiveBtn = drawBtn("archiv");       
        let editBtn = drawBtn("edit");
    
        td.append(editBtn);
        td.append(archiveBtn);
        td.append(deleteBtn);
        
        notesBody[i].append(td);     
    }
}

export default drawIconsForBody;