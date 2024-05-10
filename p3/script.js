function rotateHands() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.getElementById("hour");
    const minuteHand = document.getElementById("minute");
    const secondHand = document.getElementById("second");

    const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
    const minuteAngle = minute * 6 + (second / 60) * 6;
    const secondAngle = second * 6;

    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

function toggleMusic() {
    const audio = document.getElementById('myAudio');
    if (audio.paused) {
        audio.play();
        console.log("Music is playing!");
    } else {
        audio.pause();
        console.log("Music is paused!");
    }
}

function setClockToSix() {
    const hourHand = document.getElementById("hour");
    const minuteHand = document.getElementById("minute");

    // Calculate the angles for 6:27 position
    const hourAngle = 180 + (7 / 60) * 30; // 180 degrees + (27 minutes / 60 minutes) * 30 degrees
    const minuteAngle = 162 + (7 / 60) * 6; // 162 degrees + (27 minutes / 60 minutes) * 6 degrees

    hourHand.style.transition = "transform 2s";
    minuteHand.style.transition = "transform 2s";

    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;

    setTimeout(() => {
        rotateHands();
        hourHand.style.transition = "";
        minuteHand.style.transition = "";
    }, 2000);
}

// Get fish image elements
const bigFishImg = document.querySelector(".bigfish");
const smallFishImg = document.querySelector(".smallfish");

bigFishImg.addEventListener("click", setClockToSix);
smallFishImg.addEventListener("click", toggleMusic);

// Call rotateHands function every second
setInterval(rotateHands, 1000);

// Initial call to set hands position correctly
rotateHands();