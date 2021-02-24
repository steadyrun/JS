const SHOWING_CL = "showing";
const jsForm = document.querySelector(".js-form"),
    nameInput = jsForm.querySelector(".nameInput");
const greetings = document.querySelector(".js-greetings"),
    syaHello = greetings.querySelector(".greetings");


function init(){
    getGreetings();
}

function getGreetings(){
    const name = localStorage.getItem("userName");

    if(name === null){
        jsForm.classList.add(SHOWING_CL);
        greetings.classList.remove(SHOWING_CL);
    }else{
        jsForm.classList.remove(SHOWING_CL);
        greetings.classList.add(SHOWING_CL);
        greetings.innerText = `Hello ${name}`;
    }
}



init();