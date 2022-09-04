const menu= document.querySelector(".Menubtn");
const navbar= document.querySelector(".navbar");
const navlinks = document.querySelector(".navlinks");
const activePage = window.location.pathname;


menu.addEventListener('click', function(){
    menu.classList.toggle("is-active");
    navbar.classList.toggle("active");
    console.log('no again')
})

navlinks.addEventListener('click', function(){
    navlinks.classList.add('aria-active')
    console.log('00o again')
})

