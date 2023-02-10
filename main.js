// Timer text address
var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var mill = document.getElementById("milliSec");

// Button address
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");

// Mode selector
var timerMode = document.getElementById("timerSelectionBtn");
var stopWatchMode = document.getElementById("StopwatchSelectionBtn");

// Mode flag 
// 0 - stopwatch
// 1 - timer
modeFlag = 0;

// Attaching event to mode buttons
timerMode.addEventListener("click", modeFunction);
stopWatchMode.addEventListener("click", modeFunction);

// watch variables decleration
var h = "00";
var m = "00";
var s = "00";
var mil = "0";

// Timer variables
h = "00";
m = "00";
s = "00";
mil = "0";

// setting initial time
hour.textContent = h;
min.textContent = m;
sec.textContent = s;
mill.textContent = mil;

// stop watch start event listner id
var stopStopWatchID;

// Function selection based on mode button click
function modeFunction(event) {
    if (event.target == timerMode) {
        modeFlag = 1;
      
        timerMode.classList.remove("inactive");
        stopWatchMode.classList.add("inactive");       

    } else if (event.target == stopWatchMode) {
        modeFlag = 0;

        timerMode.classList.add("inactive");
        stopWatchMode.classList.remove("inactive");       
    }

    // initialize watch
    resetStopWatch();
}


// stop watch function
function startStopWatch() {
    // to protect in case start button is pressed multiple times
    startBtn.removeEventListener("click", startStopWatch);

    // to remove interval in case stop button is pressed
    stopStopWatchID = setInterval(stopWatchCounter, 100);

    // interval function
    function stopWatchCounter() {

        // Stopwatch Logic
        if (modeFlag == 0) {
            mil++;
            if (mil == 10) {
                mil = 0;
                s++;
                if (s < 10) {
                    s = "0" + s;
                }
            }
            if (s == 60) {
                s = "00";
                m++;
                if (m < 10) {
                    m = "0" + m;
                }
            }
            if (m == 60) {
                m = 0;
                h++;
                if (h < 10) {
                    h = "0" + h;
                }
            }
        } 
        
        // Timer Logic
        else if (modeFlag == 1) {
            mil++;
            if (mil == 10) {
                mil = 0;
                s--;
                if (s < 10) {
                    s = "0" + s;
                }
            }
            if(h == 0 && m == 0 && s == 0){
                sec.textContent = "00";
                mill.textContent = "00";
                alert("Times Up");
                stopStopWatch();
                return;
            }
            if(s == 0){
                if(m == 0){
                    h--;
                    m=59;
                    s=60
                    if(h < 10){
                        h = "0" + h;
                    }
                } else{
                    m--;
                    s=60;
                    if(m < 10){
                        m = "0" + m;
                    }
                }
            }
        }

        // update the time
        hour.textContent = h;
        min.textContent = m;
        sec.textContent = s;
        mill.textContent = mil;
    }
}

// stop button function
function stopStopWatch() {
    // assign event listner when stop button is pressed as it was removed when start is pressed
    // to avoide problems in case start button is pressed multiple times
    startBtn.addEventListener("click", startStopWatch);
    clearInterval(stopStopWatchID);
}

// reset button function
function resetStopWatch() {
    if (modeFlag == 0) {
        h = "00";
        m = "00";
        s = "00";
        mil = 0;
    } else if (modeFlag == 1) {
        h = "00";
        m = "05";
        s = "00";
        mil = 0;
    }

    hour.textContent = h;
    min.textContent = m;
    sec.textContent = s;
    mill.textContent = mil;
}

// assigning event listners
startBtn.addEventListener("click", startStopWatch);
stopBtn.addEventListener("click", stopStopWatch);
resetBtn.addEventListener("click", resetStopWatch);





