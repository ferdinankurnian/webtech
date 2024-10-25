let timerInterval;
let centiseconds = 0;
let countdownMode = false;

function formatTime(cs) {
    let seconds = Math.floor(cs / 100);
    let centisecondsPart = cs % 100;
    return `${String(seconds).padStart(3, '0')}:${String(centisecondsPart).padStart(2, '0')}`;
}

function updateDisplay() {
    const display = document.getElementById('timer-text');
    display.textContent = formatTime(centiseconds);
}

function startTimer() {
    const inputSeconds = document.getElementById('seconds');
    const inputTime = inputSeconds.value;
    inputSeconds.disabled = true;
    if (inputTime && !countdownMode) {
        // Cek apakah input adalah angka
        if (isNaN(inputTime) || inputTime.trim() === '') {
            resetTimer()
            alert('Please enter a valid number.');
            return;
        }
        centiseconds = parseInt(inputTime) * 100;
        countdownMode = true;
    }

    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (centiseconds > 0) {
                centiseconds--;
                updateDisplay();
            } else if (countdownMode) {
                resetTimer();
                alert('Time is up!');
            }
        }, 10);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    const inputSeconds = document.getElementById('seconds');
    stopTimer();
    inputSeconds.disabled = false;
    centiseconds = 0;
    countdownMode = false;
    updateDisplay();
}

updateDisplay();