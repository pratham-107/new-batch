let timer;
let seconds = 0;
const stopwatch = document.getElementById('stopwatch');

function updateTime(){
    stopwatch.textContent = new Date(seconds * 1000).toISOString().substr(11, 8);
}

function start(){
    timer = setInterval(() => {
        seconds++;
        updateTime();
    }, 100);
}

function stop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    seconds = 0;
    updateTime();
}

