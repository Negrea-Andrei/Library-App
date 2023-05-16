const form = document.querySelector(".display-form");
const formPage = document.querySelector(".form-container");

let visible = false;

function visibility() {
    if (visible == false) {
        visible = true;
    }
    else if (visible == true) {
        visible = false;
    }
}

function formVisible() {
    visibility();
    if (visible == true) {
        formPage.style.setProperty('display', 'block')
    }
    else if (visible == false) {
        formPage.style.setProperty('display', 'none')
    }
}

form.addEventListener('click', formVisible)