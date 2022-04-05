 /* Creates header for the table according to value from object */
 function createHeaderForTable(title, className) {
    let thead = document.createElement('thead');  
    let trForThead = document.createElement('tr');
    trForThead.classList.add(className)
    thead.append(trForThead);
    
    let th = document.createElement('th');
        th.innerHTML = "";
        trForThead.append(th);

    for (let key in title) {
        let th = document.createElement('th');
        th.innerHTML = title[key];
        trForThead.append(th);
    }

    return thead;
  }

  export default createHeaderForTable;