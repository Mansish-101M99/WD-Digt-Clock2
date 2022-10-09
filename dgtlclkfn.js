
const hrEl = document.getElementById("hr");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const ampmEl = document.getElementById("pmam");

function updateClockTime() {
    let h = new Date().getHours();
    let mn = new Date().getMinutes();
    let sc = new Date().getSeconds();
    let ap = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h < 10) {
        h = "0" + h;
    }

    // h = h < 10 ? "0" + h : h;
    mn = mn < 10 ? "0" + mn : mn;
    sc = sc < 10 ? "0" + sc : sc;

    if (h > 12) {
        h -= 12;
        ap = "PM";
    }

    hrEl.innerText = h;
    minEl.innerText = mn;
    secEl.innerText = sc;
    ampmEl.innerText = ap;

    setTimeout(() => {
        updateClockTime();
    }, 1000 /*in milliseconds*/);
}

updateClockTime();