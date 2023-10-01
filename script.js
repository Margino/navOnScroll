const nav = document.querySelector('.nav')

let lastScroll = 0
let scrollDistance = 0

// remove the default css class
nav.classList.remove('sticky')

window.addEventListener('scroll', () => {
    scrollDistance = window.scrollY

    if (scrollDistance < lastScroll) { // scroll down
            nav.classList.add('sticky')
            nav.style.top = 0
    }
    else if (scrollDistance > lastScroll) { // scroll up
            nav.style.top = `-${nav.offsetHeight}px`
    }
    
    if (scrollDistance == 0) { // top of the page
        nav.classList.remove('sticky')
    }

    lastScroll = scrollDistance
})