function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = function () {
    const duration1 = 24 * 60 * 60; // 24 horas en segundos para el primer temporizador
    const duration2 = 24 * 60 * 60; // 24 horas en segundos para el segundo temporizador

    const display1 = document.getElementById('timer1');
    const display2 = document.getElementById('timer2');

    // Inicia ambos temporizadores simultáneamente
    startTimer(duration1, display1);
    startTimer(duration2, display2);
};
