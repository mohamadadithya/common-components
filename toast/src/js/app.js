const toggleButton = document.querySelector('.toggle-btn');
const toast = document.querySelector('.toast');

const showToast = (status, time) => {
    const toastIcon = toast.querySelector('.toast__icon');
    toast.classList.add(status, 'show');
    switch (status) {
        case 'success':
            toastIcon.classList.add('fa-check');
            break;
        case 'error':
            toastIcon.classList.add('fa-times');
            break;
        case 'warning':
            toastIcon.classList.add('fa-exclamation-triangle');
            break;
        default:
            toastIcon.classList.add('fa-info');
            break;
    }
    setTimeout(() => {
        toast.classList.remove('show')
    }, time)
}

toggleButton.addEventListener('click', () => showToast('success', 2500));