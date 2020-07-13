
function featuredUpdate() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			document.getElementById("featured-txt-a").innerHTML = myArr[0].type;
			document.getElementById("featured-txt-b").innerHTML = myArr[0].title;
			document.getElementById("featured-txt-c").innerHTML = myArr[0].date;
			document.getElementById("featured-img").src = myArr[0].image;
			document.getElementById("featured-txt-1a").innerHTML = myArr[1].type;
			document.getElementById("featured-txt-1b").innerHTML = myArr[1].title;
			document.getElementById("featured-txt-1c").innerHTML = myArr[1].date;
			document.getElementById("sub-featured-img-a").src = myArr[1].image;
			document.getElementById("featured-txt-2a").innerHTML = myArr[2].type;
			document.getElementById("featured-txt-2b").innerHTML = myArr[2].title;
			document.getElementById("featured-txt-2c").innerHTML = myArr[2].date;
			document.getElementById("sub-featured-img-b").src = myArr[2].image;
		}
	};
	xmlhttp.open("GET", "js/updates.txt", true);
	xmlhttp.send();
}
