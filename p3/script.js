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



// Get the big fish image element
const bigFishImg = document.querySelector(".bigfish");
const smallFishImg = document.querySelector(".smallfish");

bigFishImg.addEventListener("click", toggleMusic);
smallFishImg.addEventListener("click", toggleMusic);


// Call rotateHands function every second
setInterval(rotateHands, 1000);

// Initial call to set hands position correctly
rotateHands();