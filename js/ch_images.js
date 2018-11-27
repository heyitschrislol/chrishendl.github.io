var index;
var captionText;

function checkItem(n) {
	index = n;
}
function openModal() {
	if (index === 1) { document.getElementById('modalproj1').style.display = "block"; }
	else if (index === 2) { document.getElementById('modalproj2').style.display = "block"; }
	else if (index === 3) { document.getElementById('modalproj3').style.display = "block"; }
  
}

function closeModal() {
  if (index === 1) { document.getElementById('modalproj1').style.display = "none"; }
	else if (index === 2) { document.getElementById('modalproj2').style.display = "none"; }
	else if (index === 3) { document.getElementById('modalproj3').style.display = "none"; }
}

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
  
  /************************/
  /* GET SPECIFIC PROJECT */
  /************************/ 
  if (index === 1) { 
	var slides = document.querySelectorAll(".modalproj1 .modal-content div.slides")
	var dots = document.querySelectorAll(".modalproj1 .modal-content img.demo")
	captionText = document.getElementById("caption1");
  } 
  else if (index === 2) {
	var slides = document.querySelectorAll(".modalproj2 .modal-content div.slides")
	var dots = document.querySelectorAll(".modalproj2 .modal-content img.demo")
	captionText = document.getElementById("caption2");
  }
  else if (index === 3) {
	var slides = document.querySelectorAll(".modalproj3 .modal-content div.slides")
	var dots = document.querySelectorAll(".modalproj3 .modal-content img.demo")
	captionText = document.getElementById("caption3");
  }
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}