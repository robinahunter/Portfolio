//JS for page transitions using swup

// const swup = newSwup()

//JS for hamburger menu

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".navbar").forEach(n => n.
   addEventListener("click", () => {
        hamburger.classList.remove("active");
        navbar.classList.remove("active");
   }))

   // CAROUSEL SECTION automatic slide function ---------------------------------------------------
let currentImgIndex = 0;

const images = document.getElementsByClassName('images');

function automaticSlide () {
    setTimeout(automaticSlide, 1000);
let pics;
const img  = document.querySelectorAll('.images');
for (pics=0; pics<img.length; pics++) {
    img[pics].style.display="none";
}
currentImgIndex++;
if (currentImgIndex > img.length) {
    currentImgIndex = 1;
    }
    img[currentImgIndex-1].style.display="block";
}
automaticSlide();

const pause = document.querySelector('.pause')  

pause.addEventListener('click', () => {
    
    if(currentImgIndex >= images.length) {
        currentImgIndex = 0;
        } 
})
       // CAROUSEL SECTION automatic slide function ---------------------------------------------------
