import drawTables, { showArchive } from "../app.js";


const DELETE = "DELETE";
const ARCHIV = "ARCHIV";
const UNARCHIV = "UNARCHIV";
const VIEWING_ARCHIVE = "VIEWING_ARCHIVE";
const CLOSE_ARCHIVE = "CLOSE_ARCHIVE";
const ADD_NOTE = "ADD_NOTE";
const EDIT_NOTE = "EDIT_NOTE";

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
            {id: "1",  name: "Shoping List1", category: "Task", created: "April 20, 2021",
             content: "asfasfasf", dates: ""},
            {id: "2",  name: "Shoping List2", created: "April 20, 2021", category: "Random Thought",
             content: "asfasfasf", dates: ""},
            {id: "3",  name: "Shoping List3", created: "April 20, 2021", category: "Task", 
            content: "asfasfasf",  dates: ""},
            {id: "4",  name: "Shoping List4", created: "April 20, 2021", category: "Idea", 
            content: "asfasfasf", dates: ""},
            {id: "5",  name: "Shoping List5", created: "April 20, 2021", category: "Task", 
            content: "asfasfasf", dates: ""}
        ],        
        archivedNotes: [],  // stores archived objects from body
        textInputsArray: ["name", "content"],
        selectArray: ["Task", "Random Thought", "Idea"]
    }
}

export const dispatch = (action) => { 
  switch (action.type) {    
    case DELETE: {        
      state.notes = {
        ...state.notes,   
      body: state.notes.body.filter( e => e.id !== action.id),
        archivedNotes: [...state.notes.archivedNotes]   
      } 
      drawTables(state.notes.body);

      break;
    }
      
    case ARCHIV: {       
      state.notes.body.map(e => {
        if (e.id === action.id){
          state.notes.archivedNotes.push(e);
        }
      })
      dispatch(deleteNoteAC(action.id))     
      
      break;
    } 
    
    case UNARCHIV: {
      let archivedNotesCopy = [];

      state.notes.archivedNotes.map((e) => {
        if (e.id === action.id) {
          state.notes.body.push(e);
        } else {
          archivedNotesCopy.push(e);
        }
      })

      state.notes.archivedNotes = archivedNotesCopy;

      showArchive(state.notes.archivedNotes); 
      
      console.log(state.notes.body)
      break;
    }
      
    case VIEWING_ARCHIVE: {      
      showArchive(state.notes.archivedNotes);  
      break;
    }

    case CLOSE_ARCHIVE: {      
      drawTables(state.notes.body);  
      break;
    }

    case ADD_NOTE: {
      state.notes.body.push(action.object);
      drawTables(state.notes.body);
      break
    }

    case EDIT_NOTE: {
      state.notes.body = state.notes.body.map((e) => {
        if (e.id === action.id){
          return action.object;
        } else {
          return e
        }
      })
      drawTables(state.notes.body);
    }
        
  }
}


export const deleteNoteAC = (id) => ({type: DELETE, id: id});
export const archivNoteAC = (id) => ({type: ARCHIV, id: id});
export const unarchivNoteAC = (id) => ({type: UNARCHIV, id: id});
export const viewingArchiveAC = () => ({type: VIEWING_ARCHIVE});
export const closeArchiveAC = () => ({type: CLOSE_ARCHIVE});
export const addNoteAC = (object) => ({type: ADD_NOTE, object: object});
export const editNoteAC = (object, id) => ({type: EDIT_NOTE, object: object, id: id});

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
