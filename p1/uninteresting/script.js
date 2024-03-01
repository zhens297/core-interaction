document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.box h2');
    const textContent = textElement.innerText;
    textElement.innerText = '';

    let i = 0;
    let typingSpeed = 30; // Adjust typing speed here
    let typingTimeout; // Variable to hold the typing setTimeout
    let skipClickCount = 0; // Variable to track the number of skip button clicks

    function typeWriter() {
        if (i < textContent.length) {
            textElement.innerHTML += textContent.charAt(i);
            i++;
            typingTimeout = setTimeout(typeWriter, typingSpeed);
        }
    }

    function skipTyping() {
        clearTimeout(typingTimeout); // Clear the typing setTimeout
        textElement.innerText = textContent; // Set the text content immediately
        console.log('Typewriter animation skipped!');

        const uninterestingElement = document.querySelector('.uninteresting');
        uninterestingElement.style.animationDelay = '1.2s'; // Adjust animation delay
        
        // Increase skip click count
        skipClickCount++;

        // If it's the second click, redirect to the link
        if (skipClickCount === 2) {
            window.location.href = './question/index.html'; // Replace 'your-link-here' with your desired link
        }
    }

    // Start the typewriter effect when the page loads
    typeWriter();

    // Add event listener to the "Skip" button
    const skipButton = document.querySelector('.skip');
    skipButton.addEventListener('click', skipTyping);
});
