var index;
var captionText;

function checkItem(e) {
	index = e;
	var x = document.getElementById("myTest");
	x.innerHTML = index;
}
function openModal() {
	if (index === "first") { document.getElementById('modalproj1').style.display = "block"; }
	else if (index === "second") { document.getElementById('modalproj2').style.display = "block"; }
	else if (index === "third") { document.getElementById('modalproj3').style.display = "block"; }
  
}

function closeModal() {
  if (index === "first") { document.getElementById('modalproj1').style.display = "none"; }
	else if (index === "second") { document.getElementById('modalproj2').style.display = "none"; }
	else if (index === "third") { document.getElementById('modalproj3').style.display = "none"; }
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
  if (index === "first") { 
	var slides = document.querySelectorAll("modalproj1 > modal-content > div.slides")
	var dots = document.querySelectorAll("modalproj1 > modal-content > img.demo")
  } 
  else if (index === "second") {
	var slides = document.querySelectorAll("modalproj2 > modal-content > div.slides")
	var dots = document.querySelectorAll("modalproj2 > modal-content > img.demo")
  }
  else if (index === "third") {
	var slides = document.querySelectorAll("modalproj3 > modal-content > div.slides")
	var dots = document.querySelectorAll("modalproj3 > modal-content > img.demo")
	captionText = subItem.getElementById("caption3");
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