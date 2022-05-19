let navbar = document.querySelector('header .navbar');
let menu = document.querySelector('#menu-btn')
let control= document.querySelectorAll('.control-btn')
menu.onclick = function() {
    navbar.classList.toggle('active');
}

control.forEach(function(btn) {
    btn.onclick = function() {
        let src = btn.getAttribute('data-src');
        document.querySelector('video').src = src;
    }
})
