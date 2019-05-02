// var toggle = false;

function descSHOW(banner, pName) {
	var nav = document.getElementById(banner.id).parentElement;
	var show = document.getElementById(pName);
	if (show.style.display == "none") {
		show.style.display = "flex";
		nav.style.backgroundImage = "linear-gradient(to bottom, #9050b2, #f57e39)";
	}
	else {
		show.style.display = "none";
		nav.style.backgroundImage = "linear-gradient(to bottom, #9050b2, #ab7ac7, #bb90d4)";
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

