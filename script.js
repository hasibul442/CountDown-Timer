var daysEl = document.getElementById('days')
var hoursEl = document.getElementById('hours')
var minEl = document.getElementById('min')
var secEl = document.getElementById('sec')

const newYears = '1 Jan 2021';

function countdown(){
    const  newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60)  % 60;
    const sec = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(min);
    secEl.innerHTML = formatTime(sec);

    function formatTime(time){
        return time < 10 ? `0${time}` : time;
    }
}

countdown();
setInterval(countdown,1000);
