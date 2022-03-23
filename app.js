const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 900) {
        header.style.backgroundColor = "rgba(0, 0, 0)"
        header.style.borderBottom = "1px solid rgba(73, 251, 53, 0.548)";
    }  else if (scroll_position > 250) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.050)"
        header.style.borderBottom = "0";

    } else {
        header.style.backgroundColor = "transparent"

    }
});

menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');  
    })
})