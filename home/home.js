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


   // CAROUSEL SECTION automatic slide function -------------------------------------------
let currentImgIndex = 0;

const images = document.getElementsByClassName('images');

function automaticSlide () {
    setTimeout(automaticSlide, 500);

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
   
if(currentImgIndex >= images.length) {
    currentImgIndex = 0;
} 
       // END CAROUSEL SECTION-----------------------------------------------------------

       //Resume modal - -----------------------------------------------------------------

const openBtn = document.getElementById('openModal')

const modal = document.getElementById('modal')

const close = document.getElementById('close')

const openModal = () => {
    modal.style.display = 'block';
    }

openBtn.addEventListener('click', openModal)

const closeModal = () => {
    modal.style.display = 'none'
    }

close.addEventListener('click', closeModal)

