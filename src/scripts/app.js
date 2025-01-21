document.addEventListener('DOMContentLoaded', () => {
    const launchButton = document.getElementById('launchButton');
    const resultContainer = document.getElementById('resultContainer');

    launchButton.addEventListener('click', () => {
        // Change background and hide button
        document.body.classList.add('launched');
        launchButton.style.opacity = '0';
        setTimeout(() => {
            launchButton.style.display = 'none';
        }, 500);

        // Clear previous content
        resultContainer.innerHTML = '';
        
        // Create content container with popper animation
        const content = document.createElement('div');
        content.classList.add('popper');
        
        // Create website preview
        const image = document.createElement('img');
        image.src = 'assets/website.jpg';
        image.alt = 'Website Preview';
        image.classList.add('website-preview');
        
        // Create success message
        const message = document.createElement('div');
        message.classList.add('success-message');
        message.innerHTML = 'Congratulations! The Website is published now. Visit it here: <a href="https://marvelsnaps.in" target="_blank">Marvelsnaps.in</a>';
        
        // Launch confetti
        createConfetti();

        // Add elements with animation delay
        setTimeout(() => {
            content.appendChild(image);
            content.appendChild(message);
            resultContainer.appendChild(content);
            
            // Add animation class after elements are added
            requestAnimationFrame(() => {
                content.classList.add('animate');
            });
        }, 500);
    });
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random positioning and timing
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = ['#ffd70c', '#acacac', '#000000'][Math.floor(Math.random() * 3)];
        
        // Random rotation
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Add to DOM
        document.body.appendChild(confetti);
        
        // Cleanup
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add loading state handler
function setLoadingState(isLoading) {
    const launchButton = document.getElementById('launchButton');
    if (isLoading) {
        launchButton.disabled = true;
        launchButton.classList.add('loading');
    } else {
        launchButton.disabled = false;
        launchButton.classList.remove('loading');
    }
}