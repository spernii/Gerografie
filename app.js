const navbar = document.querySelector('.navbar');
const nuclearea = document.querySelector('.nuclearea');
const dezvoltarea = document.querySelector('.dezvoltarea');
const decolarea = document.querySelector('.decolarea');
let last_position = 0;
document.addEventListener("scroll", ()=>{
    //navbar
    if(window.scrollY >= 700){
        navbar.style.display = "block";
        navbar.style.position = "fixed";
        last_position = window.scrollY;
    }else{
        navbar.style.display = "none";
    }
    //formare
    if(window.scrollY >= 1400){
        nuclearea.style.display = "flex";
    }
    if(window.scrollY >= 1850){
        dezvoltarea.style.display = "flex";
    }if(window.scrollY >= 2200){
        decolarea.style.display = "flex";
    }
    

})
