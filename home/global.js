//GLOBAL JS for hamburger menu

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
