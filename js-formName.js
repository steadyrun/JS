const SHOWING_CL = "showing";
const jsFormName = document.querySelector(".js-formName"),
    nameInput = jsFormName.querySelector(".nameInput"),
    btn = jsFormName.querySelector(".btn");
const greetings = document.querySelector(".js-greetings"),
    syaHello = greetings.querySelector(".greetings");


function init() {
    getGreetings();
    jsFormName.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    saveAndShowGreetings();
}

function saveAndShowGreetings() {
    const name = nameInput.value;
    localStorage.setItem("userName", name);
    showGreetings(name);
}

function showGreetings(name) {
    jsFormName.classList.remove(SHOWING_CL);
    greetings.classList.add(SHOWING_CL);
    greetings.innerText = `Hello ${name}`;
}

function getGreetings() {
    const name = localStorage.getItem("userName");

    if (name === null) {
        jsFormName.classList.add(SHOWING_CL);
        greetings.classList.remove(SHOWING_CL);
    } else {
        showGreetings(name);
    }
}



init();