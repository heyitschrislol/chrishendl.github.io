let posts;
function whatsNew() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			posts = JSON.parse(this.responseText);
			document.getElementById("peep").innerHTML += posts[0].posttags.postname;
			createShell();
		}
	};
	xmlhttp.open("GET", "posts.json", true);
	xmlhttp.send();
}

// function newPages(g) {
// 	let fs = require('fs');
// 	fs.writeFile(posts[index].posttags.postname + ".html", createPage(g), function (err) {
// 		if (err) throw err;
// 		console.log('Saved!');
// 	});
// }


/* 	*************************************************************
 *	****	CREATES THE EMPTY DOM ELEMENTS OF A NEW POST	***** 
 *	****													*****
 *	************************************************************/
function createShell() {
	for (let j = 0; j < posts.length; j++) {
		let id = posts[j].posttags.postid;
		var bline1div = document.createElement("div");
		bline1div.className = "bline1";
		var newarticle = document.createElement("article");
		newarticle.className = "post-item post-item-sm";
		newarticle.id = id;
		//	-- headline
		var headlinediv = document.createElement("div");
		headlinediv.className = "post-item-headline post-item-headline-sm";
		//	-- icon
		var iconimg = document.createElement("img");
		iconimg.id = id + "-icon";
		iconimg.className = "post-item-icon post-item-icon-sm";
		iconimg.src = posts[j].posttags.posticon;
		//	-- title
		var titlediv = document.createElement("div");
		titlediv.className = "post-item-title post-item-title-sm";
		//	--- title text
		var titlespan = document.createElement("span");
		titlespan.innerText = posts[j].posttags.postheadline;
		//	--- break
		var breakline = document.createElement("br");
		//	--- subtitle text
		var subtitlespan = document.createElement("span");
		subtitlespan.innerText = "Created: " + posts[j].posttags.date;
		// var subtitletext = document.createTextNode("Created: " + posts[j].date);
		titlespan.className = "post-item-title-text post-item-title-text-sm";
		titlespan.id = id + "-title";
		subtitlespan.className = "post-item-subtitle-text post-item-subtitle-text-sm";
		subtitlespan.id = id + "-subtitle";
		//	-- b line 2
		var bline2div = document.createElement("div");
		bline2div.className = "bline2";
		//	--	post text
		var posttextdiv = document.createElement("div");
		posttextdiv.className = "post-item-text post-item-text-sm";
		posttextdiv.id = id + "-content";

		// titlespan.appendChild(titletext);
		// subtitlespan.appendChild(subtitletext);

		titlediv.appendChild(titlespan);
		titlediv.appendChild(breakline);
		titlediv.appendChild(subtitlespan);

		headlinediv.appendChild(iconimg);
		headlinediv.appendChild(titlediv);

		newarticle.appendChild(headlinediv);
		newarticle.appendChild(bline2div);
		newarticle.appendChild(posttextdiv);

		combine(j);
	}
}
function combine(j) {
	var posttext = "";
		for (let x = 0; x < posts[j].preview.length; x++) {
			posttext += posts[j].preview[x];
		}
		var bline1 = document.createElement("div");
		bline1.className = "bline1";
		newarticle.lastElementChild.innerHTML = posttext;
		document.getElementById("articleline2").insertAdjacentElement("beforebegin", newarticle);
		document.getElementById(newarticle.id).insertAdjacentElement("afterend", bline1);
}
function createPreview() {
	let sectionhead = "<div class=\"post-section-head\"><div class=\"post-section-headline\">WHAT'S NEW</div></div><div class=\"bline1\" id=\"articleline1\"></div>"
	var postarray;
	let newhead = "";
	let newpreview = "";
	let newarticle = "";
	let newend = "";
	for (let i = 0; i < posts.length; i++) {
		
		for (let q = 0; q < posts[i].posthead.length; q++) {
			newhead += posts[i].posthead[q];
		}
		for (let z = 0; z < posts[i].preview.length; z++) {
			newpreview += posts[i].preview[z];
		}
		newarticle = newhead + newpreview;
		newend = "</div>";

		postarray[i] = newarticle + newend;
		// document.getElementById("articleline2").insertAdjacentElement("beforebegin", newarticle);
		// document.getElementById("articleline2").insertAdjacentElement("afterend", newend);
	}
	document.getElementById("section-post").innerHTML = sectionhead;
	for (let g = 0; g < postarray.length; g++) {
		document.getElementById("section-post").innerHTML += postarray[g];
	}
}
/* 	*****************************************
 *	****	CREATES NEW PAGE FOR POST	***** 
 *	****								*****
 *	*****************************************/

// function createPage(j) {
// 	var html;
// 	var header = "<meta charset=\"utf-8\" /><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" /><title>Chris Hendl</title><link rel=\"icon\" href=\"favicon.ico\"><link href=\"css/t-styles.css\" rel=\"stylesheet\" /><link href=\"css/fontfaces.css\" rel=\"stylesheet\" /><script src=\"js/ch_updates.js\"></script><script src=\"js/ch_gallery.js\"></script><script src=\"js/post.json\"></script>";
// 	var body = "<section class=\"post-section post-section-sm\" id=\"section-post\"><div class=\"bline1\"></div>";
// 	var articletext;
// 	for (y in posts[j].posthead) {
// 		articlehead += y;
// 	}
// 	for (let x = 0; x < posts[j].preview.length; x++) {
// 		articletext += posts[j].content[x];
// 	}
// 	articletext += "</div></article><div class=\"bline1\"></div></section>";
// 	// document.getElementById("poop").innerHTML = articletext;

// 	html = '<!DOCTYPE html>' +
// 		'<html><head>' + header + '</head><body>' + body + articlehead + articletext + '</body></html>';
// 	return html;
// }