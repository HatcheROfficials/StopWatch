var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");

var h="00";
var m="00"; 
var s="00";
var stopStopWatchID;

function startStopWatch(){
    startBtn.removeEventListener("click",startStopWatch);
    stopStopWatchID = setInterval(stopWatchCounter,1000);

    function stopWatchCounter(){
        s++;
        if(s == 60){
            s=0;
            m++;
            if(m<10){
                m = "0" + m;
            }
        }
        if(m == 60){
            m=0;
            h++;
            if(m<10){
                m = "0" + m;
            }
            if(h<10){
                h = "0" + h;
            }
        }
        if(s<10){
            s = "0" + s;
        }
        
        hour.textContent = h;
        min.textContent = m;
        sec.textContent = s;
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
    hour.textContent = h;
    min.textContent = m;
    sec.textContent = s;
}

startBtn.addEventListener("click",startStopWatch);
stopBtn.addEventListener("click",stopStopWatch);
resetBtn.addEventListener("click",resetStopWatch);