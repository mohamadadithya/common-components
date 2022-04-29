const toggleButton = document.querySelector('.toggle-btn');
const toast = document.querySelector('.toast');

const showToast = (status, time) => {
    const toastIcon = toast.querySelector('.toast__icon');
    switch (status) {
        case 'success':
            toast.classList.add('success');
            toastIcon.classList.add('fa-check');
            break;
        case 'error':
            toast.classList.add('error');
            toastIcon.classList.add('fa-times');
            break;
        case 'warning':
            toast.classList.add('warning');
            toastIcon.classList.add('fa-exclamation-triangle');
            break;
        default:
            toast.classList.add('info');
            toastIcon.classList.add('fa-info');
            break;
    }

    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show')
    }, time)
}

toggleButton.addEventListener('click', () => showToast('success', 2500));