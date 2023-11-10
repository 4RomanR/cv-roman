// const btnOpen = document.querySelector(".btn-open");
// const btnClose = document.querySelector(".btn-close");
// const menu =  document.querySelector(".nav-bar-list");
// const listLink = document.querySelector('.list-link')
// btnOpen.addEventListener('click', function (){
//     menu.classList.toggle('nav-open')
//     console.log('apertura')
// })
// btnClose.addEventListener('click', function (){
//     menu.classList.toggle('nav-open')
//     console.log('cierre')
// })
// listLink.addEventListener('click', function (){
//     menu.classList.remove('nav-open')
//     console.log('cierre')
// })

//--------MENU NAV--------//
const menu =  document.querySelector(".nav-bar-list");
const headerNav = document.querySelector('.nav-bar')

headerNav.addEventListener('click', function(e){
    if (e.target.closest('.btn-open')){
        menu.classList.toggle('nav-open')        
    }
    if (e.target.closest('.btn-close')){
        menu.classList.remove('nav-open')   
    } 

})

//--------Selector NAV--------//
const navLinks = document.querySelectorAll('.list-link')
navLinks.forEach(navLinks => {
    navLinks.addEventListener('click', () =>{
        document.querySelector('.active')?.classList.remove('active')
        navLinks.classList.add('active')
    })
})

const html = document.documentElement
console.log(html.scrollHeight)

//--------Scroll roll--------//
const progressHtml = document.querySelector('.progress')
window.addEventListener('scroll', function(e){
    const pageHeight = html.scrollHeight - html.clientHeight
    const currentScroll = html.scrollTop
    const progress = currentScroll / pageHeight
    progressHtml.style.width = Math.round(progress * 100)+'%'

})

