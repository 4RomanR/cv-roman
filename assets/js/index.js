const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const menu =  document.querySelector(".nav-bar-list");
const listLink = document.querySelector('.list-link')
btnOpen.addEventListener('click', function (){
    menu.classList.toggle('nav-open')
    console.log('apertura')
})
btnClose.addEventListener('click', function (){
    menu.classList.toggle('nav-open')
    console.log('cierre')
})
listLink.addEventListener('click', function (){
    menu.classList.remove('nav-open')
    console.log('cierre')
})



//----------------
const html = document.documentElement
console.log(html.scrollHeight)


const progressHtml = document.querySelector('.progress')
window.addEventListener('scroll', function(e){
    const pageHeight = html.scrollHeight - html.clientHeight
    const currentScroll = html.scrollTop
    const progress = currentScroll / pageHeight
    console.log(progressHtml.style.width = Math.round(progress * 100)+'%')

})
