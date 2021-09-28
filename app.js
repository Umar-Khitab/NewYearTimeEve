const newYear = "1 Jan 2022";

const elDays = document.getElementById('days');
const elHours = document.getElementById('hours');
const elMins = document.getElementById('mins');
const elSeconds= document.getElementById('seconds');

function countdown() {

    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    
    const totalSeconds = (newYearDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 3600) % 60;
    const seconds = Math.floor(totalSeconds% 60)
    
    elDays.innerHTML = days; 
    elHours.innerHTML = formatTime(hours); 
    elMins.innerHTML = formatTime(mins); 
    elSeconds.innerHTML = formatTime(seconds); 

}
function formatTime(time){
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000)