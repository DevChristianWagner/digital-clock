const hour = document.querySelector('#horas')
const minute = document.querySelector('#minutos')
const second = document.querySelector('#segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    hour.textContent = hours
    minute.textContent = minutes
    second.textContent = seconds
})