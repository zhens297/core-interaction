document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('h1');
    const textContent = textElement.innerText;
    textElement.innerText = '';

    let i = 0;
    function typeWriter() {
        if (i < textContent.length) {
            textElement.innerHTML += textContent.charAt(i);
            i++;
            setTimeout(typeWriter, 80); // Adjust typing speed here
        }
    }

    // Start the typewriter effect when the page loads
    typeWriter();
});