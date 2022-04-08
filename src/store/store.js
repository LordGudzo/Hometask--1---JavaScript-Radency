import drawTables from "../app.js";
import notes_redux from "../redux/notes_redux.js";

let store = {
  //local state with values for table
  _state: {
    category: {
      title: { category: "Note Category", active: "Active", archived: "archived" },
      body: [
        { id: "1", category: "Task", active: 0, archived: 0 },
        { id: "2", category: "Random Thought", active: 0, archived: 0 },
        { id: "3", category: "Idea", active: 0, archived: 0 }
      ]
    },
    notes: {
      title: { name: "Name", created: "Created", category: "Category", content: "Content", dates: "Dates" },
      body: [
        {
          id: "1", name: "Shoping List1", category: "Task", created: "April 20, 2021",
          content: "3.5/2022", dates: ""
        },
        {
          id: "2", name: "Shoping List2", created: "April 20, 2021", category: "Random Thought",
          content: "I am gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
          dates: ""
        },
        {
          id: "3", name: "Shoping List3", created: "April 20, 2021", category: "Task",
          content: "asfasfasf", dates: ""
        },
        {
          id: "4", name: "Shoping List4", created: "April 20, 2021", category: "Idea",
          content: "asfasfasf", dates: ""
        },
        {
          id: "5", name: "Shoping List5", created: "April 20, 2021", category: "Task",
          content: "asfasfasf", dates: ""
        }
      ],
      archivedNotes: [],  // stores archived objects from body
      textInputsArray: ["name", "content"],
      selectArray: ["Task", "Random Thought", "Idea"]
    }
  },

  getState() {
    return this._state
  },

  getCategoryIconPath(category) {
    switch (category) {
      case "Task":
        return "https://img.icons8.com/external-kiranshastry-solid-kiranshastry/25/000000/external-shopping-cart-interface-kiranshastry-solid-kiranshastry.png";
      case "Random Thought":
        return "https://img.icons8.com/ios-filled/25/000000/development-skill.png";
      case "Idea":
        return "https://img.icons8.com/ios/25/000000/idea--v2.png";
      default:
        return "https://img.icons8.com/ios-glyphs/344/question-mark.png";
    }
  },

  getButtonIcon(btnName) {
    switch (btnName) {
      case "delete":
        return "https://img.icons8.com/ios-glyphs/20/000000/trash--v1.png";
      case "archiv":
        return "https://img.icons8.com/pastel-glyph/20/000000/archive--v4.png";
      case "edit":
        return "https://img.icons8.com/ios-glyphs/20/000000/edit--v1.png";
      default:
        return "https://img.icons8.com/ios-glyphs/344/question-mark.png";
    }
  },

  //count categories in the state and changes state for summary table
  summaryCount() {
    let dataStore = this._state.notes.body;
    let archivStore = this._state.notes.archivedNotes;

    this._state.notes.selectArray.map((category) => {
      let activ = this._countCategory(category, dataStore);
      let archiv = this._countCategory(category, archivStore);
      this._setCount(activ, category, true);
      this._setCount(archiv, category, false);
    })
  },

  // counts numbers category in the store array
  _countCategory(category, dataStore) {
    let count = 0;
    dataStore.map((e) => {
      if (category === e.category) {
        count++;
      }
    })

    return count;
  },

 // changes state for summary table
  _setCount(count, category, isActiv) {
    this._state.category.body.map((e) => {
      if (e.category === category) {
        isActiv ? e.active = count : e.archived = count
      }
      return e;
    })
  },

  //checks contents in the state and changes data field in the state
  parserContentData() {
    let contents = this._state.notes.body;
    let regExp = /(\d{1}|\d{2})(\/|\.)(\d{1}|\d{2})(\/|\.)\d{4}/g;

    for (let i = 0; i < contents.length; i++) {
      let textForParser = contents[i].content;
      let datas = textForParser.match(regExp);
      if (datas === null) datas = "";
      contents[i].dates = datas.toString();

    }
  },

  //I hope this is similar an analogue of the method from redax
  dispatch(action) {
    this._state.notes = notes_redux(this._state.notes, action);
    try {
      drawTables(this._state.notes.body);
    } catch (e) {
      console.log(e)
    }
  }
}

export default store;
window.store = store;