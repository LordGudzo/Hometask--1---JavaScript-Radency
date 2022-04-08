import { state, dispatch, setSummaryCount } from "../../store/store.js";

let summaryCount = () => {
    let dataStore = state.notes.body;
    let archivStore = state.notes.archivedNotes;

    state.notes.selectArray.map((category) => {
        let activ = countCategory(category, dataStore);
        let archiv = countCategory(category, archivStore);
        dispatch(setSummaryCount(activ, category, true));
        dispatch(setSummaryCount(archiv, category, false));
    })
}

// counts numbers category in the store array
function countCategory(category, dataStore) {
    let count = 0;
    dataStore.map((e) => {
        if (category === e.category) {
            count++;
        }
    })

    return count;
}

export default summaryCount;