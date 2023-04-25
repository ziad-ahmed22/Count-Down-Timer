setInterval(() => {
    let comingDate = new Date("sep 29 2024 12:25:38").getTime();
    let currentDate = new Date().getTime();
    let date = comingDate - currentDate;

    let days = Math.floor(date / (1000 * 60 * 60 * 24));
    let hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((date % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;

}, 1000);