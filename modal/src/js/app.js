const toggleButton = document.querySelector('.toggle-btn');
const closeButton = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const handleModal = (state) => {
    if(state === 'close') {
        modal.classList.remove('open');
        overlay.classList.remove('active');
    } else {
        modal.classList.add(state);
        overlay.classList.add('active');
    }
}

toggleButton.addEventListener('click', () => handleModal('open'));
closeButton.addEventListener('click', () => handleModal('close'));