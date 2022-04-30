window.onscroll = function (e) {
    scrollFunction(e.path[1].innerWidth)
    menu.classList.remove('active')
    burger.classList.remove('active')
};

window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('loader-hide')
})

const mediaQuery = window.matchMedia('max-width: 322px')
if (mediaQuery.matches) {
    media()
}

function media() {}

function scrollFunction(width) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("navbar").style.background = "white";
        if (width < 322) {
            document.getElementById("logo").style.fontSize = "20px";
        } else {
            document.getElementById("logo").style.fontSize = "25px";
        }
    } else {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("navbar").style.background = "transparent";
        if (width < 322) {
            document.getElementById("logo").style.fontSize = "20px";
        } else {
            document.getElementById("logo").style.fontSize = "35px";
        }
    }
}

const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.header-menu')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
})

const upArrow = document.querySelector('.to-top')

upArrow.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

window.addEventListener('scroll', () => {
    if(pageYOffset > 1000){
        upArrow.style.transform = 'scale(1)'
    } 
    else{
        upArrow.style.transform = 'scale(0)'
    }
})