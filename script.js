let time = 25 * 60;
let originalTime = time;
let timer = null;
let isRunning = false;

function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("timer").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startBotton() {
    if (!isRunning) {
        timer = setInterval(() => {

            if (time > 0) {
                time--;
                updateDisplay();

            } else {
                clearInterval(timer);
                document.getElementById('alarm').play();
                isRunning = false;
            }
        }, 1000);
        isRunning = true;
    }
}

function pauseBotton() {
    clearInterval(timer);
    isRunning = false;
}

function resetBotton() {
    clearInterval(timer);
    time = originalTime;
    updateDisplay();
    isRunning = false;
}

function applyCustomTime() {
    const focusTime = parseInt(document.getElementById('focusTime').value) || 25;
    time = focusTime * 60;
    originalTime = time;
    updateDisplay();
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}




document.getElementById('startButton').addEventListener('click', startBotton);
document.getElementById('pauseButton').addEventListener('click', pauseBotton);
document.getElementById('resetButton').addEventListener('click', resetBotton);
document.getElementById('applyButton').addEventListener('click', applyCustomTime);
document.getElementById('themeButton').addEventListener('click', toggleTheme);
document.getElementById('focusTime').addEventListener('change', applyCustomTime);
document.getElementById('breakTime').addEventListener('change', applyCustomTime);

updateDisplay();