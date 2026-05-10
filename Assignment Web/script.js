// TIMER LOGIC
const targetDate = new Date("Dec 15, 2026 08:30:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const timerEl = document.getElementById("timer");
    if (!timerEl) return;

    if (diff < 0) {
        timerEl.innerHTML = "ACARA TELAH BERMULA";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    timerEl.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}

// COUNTER LOGIC
function startCounter() {
    let current = 0;
    const target = 245;
    const countEl = document.getElementById("count");

    if (countEl) {
        const interval = setInterval(() => {
            if (current < target) {
                current++;
                countEl.innerText = current;
            } else {
                clearInterval(interval);
            }
        }, 15);
    }
}

// JALANKAN SEMUA
window.onload = () => {
    setInterval(updateTimer, 1000);
    updateTimer(); // Jalankan terus tanpa tunggu 1 saat
    startCounter();
};