const menuButton = document.getElementById('menu-btn');
const navbarItems = document.querySelectorAll('.navbar__items');

const openNavbar = () => {
    navbarItems.forEach(item => {
        item.classList.toggle('active');
    });
}

menuButton.addEventListener('click', openNavbar);