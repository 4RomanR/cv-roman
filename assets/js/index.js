const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const menu =  document.querySelector(".nav-open");

btnOpen.addEventListener('click', function (){
    menu.classList.toggle('nav-open')
    console.log('apertura')
})
btnOpen.addEventListener('click', function (){
    menu.classList.remove('nav-open')
})
