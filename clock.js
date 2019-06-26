setInterval(getTheTime, 1000);

function getTheTime() {
    let clock = document.getElementById("clock");
    let d = new Date();
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    let ampm = "am";
    if(hrs >= 12) {
        ampm = "pm";
    }
    
    if(hrs > 12) {
        hrs = hrs - 12;
    }
    if(hrs < 10) {
        hrs = "0" + hrs;
    }
    if(mins < 10) {
        mins = "0" + mins;
    }
    if(secs < 10) {
        secs = "0" + secs;
    }
    
    
    
    let str = hrs + ":" + mins + ":" + secs + " " + ampm;

    clock.innerText = str;
}


let button = document.getElementById("start");

let hrs = 0;
let mins = 0;
let secs = 0;

let dispHrs = 0;
let dispMins = 0;
let dispSecs = 0;

function startStopWatch() {
    let stopwatch = document.getElementById("stopwatch");
    secs ++;
    if(secs == 60) {
        secs = 0;
        mins ++;
    }
    if(mins == 60) {
        mins = 0;
        hrs ++;
    }
    if(secs < 10) {
        dispSecs = "0" + secs;
    }
    else{
        dispSecs = secs;
    }
    if(mins < 10) {
        dispMins = "0" + mins;
    }
    else {
        dispMins = mins;
    }
    if(hrs < 10) {
        dispHrs = "0" + hrs;
    }
    else {
        dispHrs = hrs;
    }
    let watch = dispHrs + ":" + dispMins + ":" + dispSecs;
    stopwatch.innerText = watch;
    
    
}

let started = false;
let interval = null;

function startStop() {
    if(!started) {
        interval = setInterval(startStopWatch, 1000);
        document.getElementById("start").innerText = "Stop";
        started = true;
    } else{
        clearInterval(interval);
        document.getElementById("start").innerText = "Start";
        started = false;
    }
}

function reset() {
    clearInterval(interval);
    secs = 0;
    mins = 0;
    hrs = 0;
    document.getElementById("stopwatch").innerText = "00:00:00";
    document.getElementById("start").innerText = "Start";
    started = false;
}






