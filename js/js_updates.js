var y;
function whatsNew() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// var blog = document.getElementById("blogstart");
			var postContent = JSON.parse(this.responseText);
			var postName = postcontent[0].postname
			var newpost = createShell(postName);

		}
	};
	xmlhttp.open("GET", "js/blogs.json", true);
	xmlhttp.send();
}

function createShell(id) {
	var newarticle = document.createElement("article");
	newarticle.className = "blog-item blog-item-sm";
	newarticle.id = id;
	// children of newarticle
	var headlinediv = document.createElement("div");
	headlinediv.className = "blog-item-headline blog-item-headline-sm";
	var blinediv = document.createElement("div");
	blinediv.className = "bline2";
	var blogtextdiv = document.createElement("div");
	blogtextdiv.className = "blog-item-text blog-item-text-sm";
	blogtextdiv.id = id + "-content";
	// children of headlinediv
	var iconimg = document.createElement("img");
	iconimg.id = id + "-icon";
	var titlediv = document.createElement("div");
	titlediv.className = "blog-item-title blog-item-title-sm";
	// children of titlediv
	var titlespan = document.createElement("span");
	var subtitlespan = document.createElement("span");
	titlespan.className = "blog-item-title-text blog-item-title-text-sm";
	titlespan.id = id + "-title";
	subtitlespan.className = "blog-item-subtitle-text blog-item-subtitle-text-sm";
	subtitlespan.id = id + "-subtitle";

	titlediv.appendChild(titlespan);
	titlediv.appendChild(subtitlespan);

	headlinediv.appendChild(iconimg);
	headlinediv.appendChild(titlediv);

	newarticle.appendChild(headlinediv);
	newarticle.appendChild(blinediv);
	newarticle.appendChild(blogtextdiv);

	var posts = document.getElementsByClassName("blog-item");
	y = posts[0];
	document.getElementById("blog-section").replaceChild(newpost, document.getElementsByClassName("blog-item")[0]);
	
}