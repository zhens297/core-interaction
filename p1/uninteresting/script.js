document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.box h2');
    const textContent = textElement.innerText;
    textElement.innerText = '';

    let i = 0;
    function typeWriter() {
        if (i < textContent.length) {
            textElement.innerHTML += textContent.charAt(i);
            i++;
            setTimeout(typeWriter, 30); // Adjust typing speed here
        }
    }

    // Start the typewriter effect when the page loads
    typeWriter();
});