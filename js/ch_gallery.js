
function dcImage(imgs) {
	// Get the expanded image
	var expandImg = document.getElementById("dc-image");
	expandImg.src = imgs.src;
	// Show the container element (hidden with CSS)
	expandImg.style.display = "block";
	document.getElementById("dc-close").style.display = "block";
}
function seImage(imgs) {
	// Get the expanded image
	var expandImg = document.getElementById("se-image");
	expandImg.src = imgs.src;
	// Show the container element (hidden with CSS)
	expandImg.style.display = "block";
	document.getElementById("se-close").style.display = "block";
}
function rtImage(imgs) {
	// Get the expanded image
	var expandImg = document.getElementById("rt-image");
	expandImg.src = imgs.src;
	// Show the container element (hidden with CSS)
	expandImg.style.display = "block";
	document.getElementById("rt-close").style.display = "block";
}
function closeImages() {
	document.getElementById("dc-image").style.display = "none";
	document.getElementById("se-image").style.display = "none";
	document.getElementById("rt-image").style.display = "none";
	document.getElementById("dc-close").style.display = "none";
	document.getElementById("se-close").style.display = "none";
	document.getElementById("rt-close").style.display = "none";
}










// function dcImages() {
// 	var thumbsContainer = document.getElementById("dc-thumbs");
// 	var thumbs = thumbsContainer.getElementsByClassName("ex-thumb");
// 	var imgsContainer = document.getElementById("dc-images");
// 	var imgs = imgsContainer.getElementsByClassName("ex-image");
// 	for (var i = 0; i < thumbs.length; i++) {
// 		// num = i;
// 		thumbs[i].addEventListener("click", function (i, imgs) {
// 			var current = document.getElementsByClassName("active-img");

// 			// If there's no active class
// 			if (current.length > 0) {
// 				current[0].className = current[0].className.replace("active-img", "ex-image");
// 			}
// 			// Add the active class to the current/clicked button
// 			imgs[i].className = imgs[i].className.replace("ex-image", "active-img");
// 		});
// 	}
// }


// function seImages() {
// 	var thumbsContainer = document.getElementById("se-thumbs");
// 	var imgsContainer = document.getElementById("se-images");
// 	var thumbs = thumbsContainer.getElementsByClassName("ex-thumb");
// 	var imgs = imgsContainer.getElementsByClassName("ex-image");
// 	for (var i = 0; i < thumbs.length; i++) {
// 		thumbs[i].addEventListener("click", function () {
// 			var current = document.getElementsByClassName("active-img");

// 			// If there's no active class
// 			if (current.length > 0) {
// 				current[0].className = current[0].className.replace(" active-img", "inactive-img");
// 			}
// 			// Add the active class to the current/clicked button
// 			imgs[i].className.replace(" inactive-img", "active-img");
// 		});
// 	}
// }

// function rtImages() {
// 	var thumbsContainer = document.getElementById("rt-thumbs");
// 	var imgsContainer = document.getElementById("rt-images");
// 	var thumbs = thumbsContainer.getElementsByClassName("ex-thumb");
// 	var imgs = imgsContainer.getElementsByClassName("ex-image");
// 	for (var i = 0; i < thumbs.length; i++) {
// 		thumbs[i].addEventListener("click", function () {
// 			var current = document.getElementsByClassName("active-img");

// 			// If there's no active class
// 			if (current.length > 0) {
// 				current[0].className = current[0].className.replace(" active-img", "inactive-img");
// 			}
// 			// Add the active class to the current/clicked button
// 			imgs[i].className.replace(" inactive-img", "active-img");
// 		});
// 	}
// }



// function showImage() {
// 	var tileID = findActiveTile();
// 	var tile = document.getElementById(tileID);
// 	if (tile.id == "dCalc") {
// 		var thumbsContainer = document.getElementById("dc-thumbs");
// 		var imgsContainer = document.getElementById("dc-images");
// 	}
// 	else if (tile.id == "sEase") {
// 		var thumbsContainer = document.getElementById("se-thumbs");
// 		var imgsContainer = document.getElementById("se-images");
// 	}
// 	else if (tile.id == "rTool") {
// 		var thumbsContainer = document.getElementById("rt-thumbs");
// 		var imgsContainer = document.getElementById("rt-images");
// 	}

// 	var thumbs = thumbsContainer.getElementsByClassName("ex-thumb");
// 	var imgsContainer = document.getElementsByClassName("ex-images");
// 	var imgs = imgsContainer.getElementsByClassName("ex-image");
// 	for (var i = 0; i < thumbs.length; i++) {
// 		thumbs[i].addEventListener("click", function () {
// 			var current = document.getElementsByClassName("active-img");

// 			// If there's no active class
// 			if (current.length > 0) {
// 				current[0].className = current[0].className.replace(" active-img", "inactive-img");
// 			}
// 			// Add the active class to the current/clicked button
// 			imgs[i].className.replace(" inactive-img", "active-img");
// 		});
// 	}
// }

// function findActiveTile() {
// 	var tiles = document.getElementsByClassName("ex-tile")
// 	for (var i = 0; i < tiles.length; i++) {
// 		if (tiles[i].styles.display = "block") {
// 			var tileID = tiles[i].id;
// 			return tileID;
// 		}
// 	}
// }