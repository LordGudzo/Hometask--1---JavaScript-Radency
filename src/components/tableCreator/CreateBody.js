import store from "../../store/store.js";

/* Creates the body of the table accoring to value from title and body variable*/
function createBodyForTable(title, body, className) {
  let tBody = document.createElement('tbody');
  tBody.classList.add(className + "_tbody")

  /* Scroll array with body objects */
  for (let i = 0; i < body.length; i++) {
    let line = createLineForTable(title, body, className, i);
    tBody.append(line);

  }
  
  return tBody;
}

//Create line for body of table. Compare title and body columns
function createLineForTable(title, body, className, i) {
  let line = document.createElement('tr');
  line.id = body[i].id; //adds id from store   
  line.classList.add(className + "_body");
  
  //adds icon
  let categoryIcon = getIcon(body[i].category);
  line.append(categoryIcon);

  /* Scrolls values from title columns and checks them against the value value from objects with body
      object */
  Object.keys(title).map((titleValue) => {
    let td = document.createElement('td');

    if (body[i].hasOwnProperty(titleValue)) {
      td.innerHTML = body[i][titleValue];
      td.classList.add("td_" + titleValue)
    } else {
      td.innerHTML = ' ';
    }

    line.append(td)
  })

  return line;
}

// Accepts category, creates td for table, takes puth to icon from store, return td
function getIcon(category) {
  let td = document.createElement('td');
  let iconPuth = store.getCategoryIconPath(category);
  let icon = new Image(20, 20);
  icon.src = iconPuth;
  td.append(icon);
  return td;
}

export default createBodyForTable;