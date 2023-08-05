
const menuItems = document.querySelectorAll('.navbar-nav li a');

menuItems.forEach(item => {
    if (item.getAttribute('href') === window.location.pathname + window.location.hash) {
        item.classList.add('active');
    }
});




