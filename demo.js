const menu = document.querySelector('#menu');
const background = document.querySelector('#bg')
const sidenav = document.querySelector('#sidebar')
const close = document.querySelector('#close')
menu.addEventListener("click",function(){
    background.style.transform = 'translateX(200px)scale(.6) skewX(0deg) rotateY(-5deg)'
    background.style.filter = 'blur(1.7px)'
    sidenav.style.left = '2%'
})

close.addEventListener("click",function(){
    background.style.transform = 'translateX(0px)scale(1)'
    background.style.filter = 'blur(0px)'
    sidenav.style.left = '-10%'
})


