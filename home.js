    // HOME PAGE JS //

   // CAROUSEL SECTION automatic slide function 
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