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
    // if (scroll_position > 850) {
    //     header.style.backgroundColor = "rgba(0, 0, 0, 0.955)"
    //     header.style.borderBottom = "1px solid rgba(73, 251, 53, 0.237)";
    // }  else if (scroll_position > 500) {
    //     header.style.backgroundColor = "rgba(0, 0, 0, 0.555)"
    //     header.style.borderBottom = "1px solid rgba(73, 251, 53, 0.137)";
    // } else if
       if (scroll_position > 250) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.955)"
        header.style.borderBottom = "1px solid rgba(73, 251, 53, 0.137)";
    } else {
        header.style.backgroundColor = "transparent"
        header.style.borderBottom = "0";

    }
});

menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');  
    })
})