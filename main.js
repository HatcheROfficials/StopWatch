var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var mill = document.getElementById("milliSec");

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");

var h="00";
var m="00"; 
var s="00";
var mil="0";

var stopStopWatchID;

function startStopWatch(){
    startBtn.removeEventListener("click",startStopWatch);
    stopStopWatchID = setInterval(stopWatchCounter,100);

    function stopWatchCounter(){
        mil++;
        if(mil == 10){
            mil=0;
            s++;
            if(s<10){
                s = "0" + s;
            }
        }
        if(s == 60){
            s="00";
            m++;
            if(m<10){
                m = "0" + m;
            }
        }
        if(m == 60){
            m=0;
            h++;
            if(h<10){
                h = "0" + h;
            }
        }
        
        hour.textContent = h;
        min.textContent = m;
        sec.textContent = s;
        mill.textContent = mil;
    }
}

function stopStopWatch(){
    startBtn.addEventListener("click",startStopWatch);
    clearInterval(stopStopWatchID);
}

function resetStopWatch(){
    h="00";
    m="00";
    s="00";
    mil=0;
    hour.textContent = h;
    min.textContent = m;
    sec.textContent = s;
    mill.textContent = mil;
}

startBtn.addEventListener("click",startStopWatch);
stopBtn.addEventListener("click",stopStopWatch);
resetBtn.addEventListener("click",resetStopWatch);