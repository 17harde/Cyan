const container = document.querySelector('.flower-animation');

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 2 + 3 + 's';
    container.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000);
}

setInterval(createFlower, 1000);
