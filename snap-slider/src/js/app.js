const buttonPrev = document.getElementById('btn-prev');
const buttonNext = document.getElementById('btn-next');
const wrapper = document.querySelector('.wrapper');
const image = document.querySelector('img');
const imageWidth = image.clientWidth;

class HandleScroll {
    // Shorthand with if else ternary
    control(state) {
        wrapper.scrollBy({ 
            left: state === 'prev' ? -imageWidth : imageWidth,
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Longhand, but code repetition
    // prev() {
    //     wrapper.scrollBy({ left: -imageWidth, top: 0, behavior: 'smooth' })
    // }

    // next() {
    //     wrapper.scrollBy({ left: imageWidth, top: 0, behavior: 'smooth' });
    // }
}

const handleScroll = new HandleScroll();

buttonPrev.addEventListener('click', () => handleScroll.control('prev'));
buttonNext.addEventListener('click', () => handleScroll.control('next'));