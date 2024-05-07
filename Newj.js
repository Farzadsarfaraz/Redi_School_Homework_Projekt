

let Menu_bar = document.querySelector('.Hamburger');
Menu_bar.addEventListener('click', function(){
    Menu_bar.classList.toggle('is-active');
})
let navbar = document.querySelector('.nav');
Menu_bar.addEventListener('click', function(){
    navbar.classList.toggle('hidden');
})