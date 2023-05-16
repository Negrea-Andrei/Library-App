const hide = document.querySelector(".display-form");
const formPage = document.querySelector(".form-container");

let seek = false;

function hideAndSeek() {
    if (seek == false) {
        seek = true;
    }
    else if (seek == true) {
        seek = false;
    }
}

function test() {
    hideAndSeek();
    if (seek == true) {
        formPage.style.setProperty('display', 'block')
    }
    else if (seek == false) {
        formPage.style.setProperty('display', 'none')
    }
}

hide.addEventListener('click', test)