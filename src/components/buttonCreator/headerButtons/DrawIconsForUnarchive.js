import drawBtn from "../../common/DrawButton.js";

let drawIconsForUnarchiveNote = () => {
    let notesBody = document.querySelectorAll('.notes_body');
    
    for (let i = 0; i< notesBody.length; i++) {
          
        let td = document.createElement('td');     
        let unarchiveBtn = drawBtn("archiv");     
    
        td.append(unarchiveBtn);
        
        notesBody[i].append(td);     
    }
}

export default drawIconsForUnarchiveNote;