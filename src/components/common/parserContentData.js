import { dispatch, setDatesAC } from "../../store/store.js";

function parserContentData() {
    let contents = document.querySelectorAll('.td_content');
    let regExp = /(\d{1}|\d{2})(\/|\.)(\d{1}|\d{2})(\/|\.)\d{4}/g;  
  

    for (let i = 0; i < contents.length; i++ ){
        const id = contents[i].parentNode.id;

        let textForParser = contents[i].innerHTML;
        let datas = textForParser.match(regExp);
        if (datas === null) datas = ""
        dispatch(setDatesAC(id, datas.toString()))
    }
}

export default parserContentData;

