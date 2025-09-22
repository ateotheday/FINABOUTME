// script.js
const blossomContainer = document.getElementById('blossom-container');
const numberOfPetals = 50; // Adjust as needed

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    // Randomize initial position, size, and animation duration
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.width = Math.random() * 10 + 5 + 'px'; // 5-15px
    petal.style.height = Math.random() * 10 + 5 + 'px';
    petal.style.animationDuration = Math.random() * 10 + 5 + 's'; // 5-15s
    petal.style.animationDelay = Math.random() * 5 + 's'; // Stagger animations

    blossomContainer.appendChild(petal);

    // Remove petal after it falls off screen to prevent memory buildup
    petal.addEventListener('animationend', () => {
        petal.remove();
        createPetal(); // Create a new petal to maintain the flow
    });
}

// Create initial petals
for (let i = 0; i < numberOfPetals; i++) {
    createPetal();
}