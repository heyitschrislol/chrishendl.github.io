const posts;
function money() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			posts = JSON.parse(this.responseText);
		}
		document.getElementById("peep").innerHTML += posts[0].posttags.postname;
		document.getElementById("peep").innerHTML += "kijfhbdjhsv";
	};
	xmlhttp.open("GET", "js/posts.json", true);
	xmlhttp.send();
}