/**
 * @inputs array with text inputs
 * If field isn't filled add class empty and return false.
 * @returns true if all fields are filled
 */
function checkTextInputs(inputs) {
    let check = 0;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length === 0) {
            inputs[i].classList.add('empty');
            check++;
        } else {
            inputs[i].classList.remove('empty')
        }
    }

    if (check !== 0) {
        return false;
    } else {
        return true;
    }
}

export default checkTextInputs;