import store from "../../store/store.js";

let drawBtn = (buttonName) => {
    let pathToImage = store.getButtonIcon(buttonName);
    let button = document.createElement('input');
    button.src = pathToImage;
    button.type = "image";
    button.classList.add(buttonName);
    return button;
}



export default drawBtn;