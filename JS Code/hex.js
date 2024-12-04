const hexagonContainer = document.querySelector('.hexagon-container');

function createHexagon() {
    const hexagon = document.createElement('div');
    hexagon.classList.add('hexagon');

    const randomX = Math.random() * 100;
    const randomSize = Math.random() * 20 + 30; 

    hexagon.style.left = `${randomX}%`;
    hexagon.style.width = `${randomSize}px`;
    hexagon.style.height = `${randomSize}px`;

    hexagonContainer.appendChild(hexagon);

    setTimeout(() => {
        hexagon.remove();
    }, 8000); 
}

setInterval(createHexagon, 500); 