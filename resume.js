// Resume modal //

const openBtn = document.getElementById('openModal')

const modal = document.getElementById('modal')

const close = document.getElementById('close')

const close1 = document.getElementById('close1')

const openModal = () => {
    modal.style.display = 'block';
    }

openBtn.addEventListener('click', openModal)

const closeModal = () => {
    modal.style.display = 'none'
    }

close.addEventListener('click', closeModal)

close1.addEventListener('click', closeModal)


   // CAROUSEL SECTION automatic slide function 
   let currentImgIndex = 0;

   const imageBtl = document.getElementsByClassName('imageBtl');
   
   function automaticSlide () {
       setTimeout(automaticSlide, 500);
   
   const img  = document.querySelectorAll('.imageBtl');
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