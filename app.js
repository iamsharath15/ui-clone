let burger = document.querySelector(".burger");
let Links = document.querySelector(".header_nav");
burger.addEventListener('click',()=>{
    Links.classList.toggle("nav-show");
})

window.addEventListener("scroll",function(){
    var header =document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})



