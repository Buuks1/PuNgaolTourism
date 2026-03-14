const container = document.querySelector('#appendedSlideshow');
const prevButton = document.querySelector('.appendedPrev');
const nextButton = document.querySelector('.appendedNext');

    // Scroll step (adjust based on item width)
    const scrollAmount = 200;

    prevButton.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });