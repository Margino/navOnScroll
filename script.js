const nav = document.querySelector('.nav')
const DELAY = 250

let lastScroll = 0
let scrollDistance = 0

window.addEventListener('scroll', () => {
    scrollDistance = window.scrollY

    if (scrollDistance < lastScroll && !nav.classList.contains('sticky')) {
        setTimeout(() => {
            nav.classList.add('sticky')
        }, DELAY)
    } 
    else if (scrollDistance > lastScroll && nav.classList.contains('sticky')) {
        setTimeout(() => {
            nav.classList.remove('sticky')
        },DELAY)
    }

    lastScroll = scrollDistance
})