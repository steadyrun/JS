const clockElement = document.querySelector(".js-clock");
const   paneElement = clockElement.querySelector(".timePane");
const   clockBtn    = clockElement.querySelector(".btn");
let clockId;

function init(){
    updateCurrentTime();
    startClock();
    clockBtn.addEventListener("click", toggleClock);
}


function updateCurrentTime(){
    const curDate = new Date(),
    curHours = curDate.getHours(),
    curMins = curDate.getMinutes(),
    curSecs = curDate.getSeconds();  
    console.log(paneElement);
    paneElement.innerText = `${curHours > 9 ? curHours : `0${curHours}`}:${
        curMins > 9 ? curMins : `0${curMins}`
    }:${curSecs > 9 ? curSecs : `0${curSecs}`}`;
}

function startClock(){
    clockId = setInterval(updateCurrentTime, 1000);
}
function termClock(){
    clearInterval(clockId);
    clockId = null;
}
function toggleClock(){
    if(clockId){
        termClock();
        clockBtn.innerText = "Start Clock";
    }else{
        startClock();
        clockBtn.innerText = "Stop Clock";
    }
}



init();