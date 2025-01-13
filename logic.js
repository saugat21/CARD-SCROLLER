const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('visible', 'above', 'below', 'hidden');
        if (index === currentIndex) {
            card.classList.add('visible');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('above');
        } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add('below');
        } else {
            card.classList.add('hidden');
        }
    });
}

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        currentIndex = (currentIndex + 1) % cards.length;
    } else if (e.deltaY < 0) {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }
    updateCards();
});

updateCards();
