// var toggle = false;

function descSHOW(pName) {
	var show = document.getElementById(pName);
	if (show.style.display == "none") {
		show.style.display = "block";
	}
	else {
		show.style.display = "none";
	}
}



function dcImage(thumb, display) {

	// Get the expanded image
	var displayimg = document.getElementById(display);
	displayimg.scrollIntoView();
	displayimg.src = thumb.src;
	displayimg.alt = thumb.alt;
	// Show the container element (hidden with CSS)
	displayimg.style.display = "block";
}

function dcClose(img) {
	img.style.display = "none";
}

