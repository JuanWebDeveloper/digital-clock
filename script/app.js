const clock = document.getElementById('clock');

const getClock = () => {
    const date = new Date();
    const weather = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };

    if (weather.hours <= 9 && weather.minutes <= 9 && weather.seconds <= 9) {
        clock.innerHTML = `0${weather.hours} : 0${weather.minutes} : 0${weather.seconds}`;
    } else if (weather.hours <= 9 && weather.minutes <= 9) {
        clock.innerHTML = `0${weather.hours} : 0${weather.minutes} : ${weather.seconds}`; 
    } else if (weather.hours <= 9 && weather.seconds <= 9) {
        clock.innerHTML = `0${weather.hours} : ${weather.minutes} : 0 ${weather.seconds}`; 
    } else if (weather.minutes <= 9 && weather.seconds <= 9) {
        clock.innerHTML = `${weather.hours} : 0${weather.minutes} : 0${weather.seconds}`;
    } else if (weather.hours <= 9) {
        clock.innerHTML = `0${weather.hours} : ${weather.minutes} : ${weather.seconds}`;  
    } else if (weather.minutes <= 9) {
        clock.innerHTML = `${weather.hours} : 0${weather.minutes} : ${weather.seconds}`; 
    } else if (weather.seconds <= 9) {
        clock.innerHTML = `${weather.hours} : ${weather.minutes} : 0${weather.seconds}`;
    } else {
        clock.innerHTML = `${weather.hours} : ${weather.minutes} : ${weather.seconds}`;
    }
}

setInterval(getClock, 300);



