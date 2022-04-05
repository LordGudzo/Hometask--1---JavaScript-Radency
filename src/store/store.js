import drawTables from "../app.js"

export const state = {
    category: {
        title: {category: "Note Category", active: "Active", archived: "archived"},
        body: [
            {category: "Task", active: 13, archived: 4},
            {category: "Random Thought", active: 7, archived: 12},
            {category: "Idea", active: 0, archived: 0}            
        ]
    },
    notes: {
        title: {name: "Name", created: "Created", category: "Category", content: "Content", dates: "Dates"},
        body: [
            {id: "1", isArchived: false, name: "Shoping List", category: "Task", created: "April 20, 2021",
             content: "asfasfasf", dates: ""},
            {id: "2", isArchived: false, name: "Shoping List", created: "April 20, 2021", category: "Random Thought",
             content: "asfasfasf", dates: ""},
            {id: "3", isArchived: false, name: "Shoping List", created: "April 20, 2021", category: "Task", 
            content: "asfasfasf",  dates: ""},
            {id: "4", isArchived: false, name: "Shoping List", created: "April 20, 2021", category: "Idea", 
            content: "asfasfasf", dates: ""},
            {id: "5", isArchived: false, name: "Shoping List", created: "April 20, 2021", category: "Task", 
            content: "asfasfasf", dates: ""},
        ],
        deletedNotes: [],
        isArchived: []
    }
}

const DELETE = "DELETE";
const ARCHIV = "ARCHIV";

export const dispatch = (action) => {
  
  switch (action.type) {
    case DELETE: 
      state.notes.deletedNotes.push(action.id);
      state.notes = {
        ...state.notes,    
        body: state.notes.body.filter( e => !state.notes.deletedNotes.includes(e.id))    
      } 
      drawTables();
    case ARCHIV:     
      state.notes.isArchived.push(action.id)
      state.notes.body.map(e => {
        if (state.notes.isArchived.includes(e.id)){
          e.isArchived = true;
        }
      })
      drawTables();
    
  }
}


export const deleteNoteAC = (id) => ({type: DELETE, id: id});
export const archivNoteAC = (id) => ({type: ARCHIV, id: id})

export const getCategoryIconPath = (category) => {
    switch (category) {
      case "Task":
        return "https://img.icons8.com/external-kiranshastry-solid-kiranshastry/25/000000/external-shopping-cart-interface-kiranshastry-solid-kiranshastry.png";
      case "Random Thought":
        return "https://img.icons8.com/ios-filled/25/000000/development-skill.png";
      case "Idea":
        return "https://img.icons8.com/ios/25/000000/idea--v2.png";
    }
  }
