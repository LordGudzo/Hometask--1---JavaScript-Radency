import { getCategoryIconPath } from "../../store/store.js";

/* Creates the body of the table accoring to value from title and body variable*/
function createBodyForTable(title, body, className) {
  let tBody = document.createElement('tbody');
  tBody.classList.add(className + "_tbody")

  /* Scroll array with body objects */
  for (let i = 0; i < body.length; i++) {

    let tr = document.createElement('tr');
    tr.id = body[i].id;
    tr.classList.add(className + "_body");
    let categoryIcon = getIcon(body[i].category);
    tr.append(categoryIcon);
    /* Scrolls values from title columns and checks them against the value value from objects with data
   variable */
    Object.keys(title).map((e) => {
      let td = document.createElement('td');

      if (body[i].hasOwnProperty(e)) {
        td.innerHTML = body[i][e];
      } else {
        td.innerHTML = ' ';
      }

      tr.append(td)
    })
    tBody.append(tr);

  }
  return tBody;
}

let getIcon = (category) => {
  let td = document.createElement('td');
  let iconPuth = getCategoryIconPath(category);
  let icon = new Image(20, 20);
  icon.src = iconPuth;
  td.append(icon);
  return td;
}

export default createBodyForTable;