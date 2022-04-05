let drawBtn = (buttonName) => {
    let pathToImage = checkButtonName(buttonName);
    let button = document.createElement('input');
    button.src = pathToImage;
    button.type = "image";
    button.classList.add(buttonName);
    return button;
}

let checkButtonName = (btnName) => {
    switch(btnName) {
        case "delete":
            return "https://img.icons8.com/ios-glyphs/20/000000/trash--v1.png"
        case "archiv":
            return "https://img.icons8.com/pastel-glyph/20/000000/archive--v4.png"
        case "edit":
            return "https://img.icons8.com/ios-glyphs/20/000000/edit--v1.png"
    }
}

export default drawBtn;