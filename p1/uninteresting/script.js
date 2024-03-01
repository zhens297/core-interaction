document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.box h2');
    const textContent = textElement.innerText;
    textElement.innerText = '';

    let i = 0;
    let typingSpeed = 30; // typing speed
    let typingTimeout; 

    function typeWriter() {
        if (i < textContent.length) {
            textElement.innerHTML += textContent.charAt(i);
            i++;
            typingTimeout = setTimeout(typeWriter, typingSpeed);
        }
    }

    function skipTyping() {
        clearTimeout(typingTimeout); 
        textElement.innerText = textContent; 
       
        console.log('Typewriter animation skipped!');

        const uninterestingElement = document.querySelector('.uninteresting');
    uninterestingElement.style.animationDelay = '1.2s';
    }

    // Start the typewriter effect when the page loads
    typeWriter();

    const skipButton = document.querySelector('.skip');
    skipButton.addEventListener('click', skipTyping);
    
});
