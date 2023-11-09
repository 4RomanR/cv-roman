// const btnOpen = document.querySelector(".btn-open");
// const btnClose = document.querySelector(".btn-close");
const menu =  document.querySelector(".nav-bar-list");
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

const headerNav = document.querySelector('.nav-bar')

headerNav.addEventListener('click', function(e){
    if (e.target.closest('.btn-open')){
        menu.classList.toggle('nav-open')        
    }
    if (e.target.closest('.btn-close')){
        menu.classList.remove('nav-open')   
    }
    if (e.target.closest('.list-menu-x')){
        menu.classList.remove('nav-open')
        const links = document.querySelectorAll('.list-link')

        for (const link of links){
            link.classList.remove('active')
        }
        e.target.classList.add('active')
    }
})


const html = document.documentElement
console.log(html.scrollHeight)


const progressHtml = document.querySelector('.progress')
window.addEventListener('scroll', function(e){
    const pageHeight = html.scrollHeight - html.clientHeight
    const currentScroll = html.scrollTop
    const progress = currentScroll / pageHeight
    console.log(progressHtml.style.width = Math.round(progress * 100)+'%')

})
