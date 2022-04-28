const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicator = document.querySelector('.indicator');

let slidesCount = 5;
let currentSlide = 0;

const handle = (status) => {
    if(currentSlide >= 4 && status === 'next') {
        currentSlide = -1
    }

    if(currentSlide <= 0 && status === 'prev') {
        currentSlide = slidesCount
    }

    let prev = currentSlide - 1;
    let next = currentSlide + 1;

    currentSlide = status == 'prev' ? prev : next;
    slides.forEach(slide => {
        slide.classList.remove('show')
    })

    slides[currentSlide].classList.add('show');
    indicator.textContent = `${status == 'prev' ? prev + 1 : next + 1} / ${slidesCount}`;
}

prevButton.addEventListener('click', () => handle('prev'));
nextButton.addEventListener('click', () => handle('next'));