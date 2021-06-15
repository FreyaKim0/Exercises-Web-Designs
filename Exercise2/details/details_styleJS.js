//1
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline";  
  dots[slideIndex-1].className += " active";
}
//2
var slideIndexNO2 = 1;
showSlidesNO2(slideIndexNO2);

function plusSlidesNO2(n) {
 showSlidesNO2(slideIndexNO2 += n);
}

function currentSlideNO2(n) {
 showSlidesNO2(slideIndexNO2 = n);
}

function showSlidesNO2(n) {
 var i2;
 var slides2 = document.getElementsByClassName("mySlides2");
 var dots2 = document.getElementsByClassName("dot2");
 if (n > slides2.length) {slideIndexNO2 = 1}    
 if (n < 1) {slideIndexNO2 = slides2.length}
 for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
 for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndexNO2-1].style.display = "block";  
  dots2[slideIndexNO2-1].className += " active";
}
//3
var slideIndexNO3 = 1;
showSlidesNO3(slideIndexNO3);

function plusSlidesNO3(n) {
 showSlidesNO3(slideIndexNO3 += n);
}

function currentSlideNO3(n) {
 showSlidesNO3(slideIndexNO3 = n);
}

function showSlidesNO3(n) {
 var i3;
 var slides3 = document.getElementsByClassName("mySlides3");
 var dots3 = document.getElementsByClassName("dot3");
 if (n > slides3.length) {slideIndexNO3 = 1}    
 if (n < 1) {slideIndexNO3 = slides3.length}
 for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";  
  }
 for (i = 0; i < dots3.length; i++) {
      dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndexNO3-1].style.display = "block";  
  dots3[slideIndexNO3-1].className += " active";
}

