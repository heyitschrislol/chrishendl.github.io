// variable to check if user clicked on item in navbar
var x = false;
// variable to hold the function of the clicked item
var item;
// function to load the appropriate content when the page's body loads
function loadContent() {
	if (x != false) {
		item();
		x = false;
	}
}



/***************** */
/*	COURSE ITEMS   */
/*
, 'courseA'
, 'courseB'
, 'courseC'
, 'courseD'
*/
/***************** */
function makeActive() {
	var btnContainer = document.getElementById("ex-tabs");

	// Get all buttons with class="ex-links" inside the container
	var btns = btnContainer.getElementsByClassName("ex-links");

	// Loop through the buttons and add the active class to the current/clicked button
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active-tab");

			// If there's no active class
			if (current.length > 0) {
				current[0].className = current[0].className.replace(" active-tab", "");
			}
			// Add the active class to the current/clicked button
			this.className += " active-tab";
		});
	}
}


function courseA() {
	document.getElementById("isds3110").style.display = "none";
	document.getElementById("isds3200").style.display = "none";
	document.getElementById("isds3105").style.display = "none";
	document.getElementById("isds4125").style.display = "block";
	document.getElementById("ex-close").style.display = "block";
	if (window.innerWidth >= 900) {
		document.getElementById("ex-leftline").style.display = "inline";
		document.getElementById("ex-rightline").style.display = "inline";
	}
}

function courseB() {
	document.getElementById("isds4125").style.display = "none";
	document.getElementById("isds3200").style.display = "none";
	document.getElementById("isds3105").style.display = "none";
	document.getElementById("isds3110").style.display = "block";
	document.getElementById("ex-close").style.display = "block";
	if (window.innerWidth >= 900) {
		document.getElementById("ex-leftline").style.display = "inline";
		document.getElementById("ex-rightline").style.display = "inline";
	}
}

function courseC() {
	document.getElementById("isds4125").style.display = "none";
	document.getElementById("isds3110").style.display = "none";
	document.getElementById("isds3105").style.display = "none";
	document.getElementById("isds3200").style.display = "block";
	document.getElementById("ex-close").style.display = "block";
	if (window.innerWidth >= 900) {
		document.getElementById("ex-leftline").style.display = "inline";
		document.getElementById("ex-rightline").style.display = "inline";
	}
}

function courseD() {
	document.getElementById("isds4125").style.display = "none";
	document.getElementById("isds3110").style.display = "none";
	document.getElementById("isds3200").style.display = "none";
	document.getElementById("isds3105").style.display = "block";
	document.getElementById("ex-close").style.display = "block";
	if (window.innerWidth >= 900) {
		document.getElementById("ex-leftline").style.display = "inline";
		document.getElementById("ex-rightline").style.display = "inline";
	}
}

function closeCourse() {
	document.getElementById("isds3110").style.display = "none";
	document.getElementById("isds3200").style.display = "none";
	document.getElementById("isds3105").style.display = "none";
	document.getElementById("isds4125").style.display = "none";
	document.getElementById("ex-leftline").style.display = "none";
	document.getElementById("ex-rightline").style.display = "none";
	document.getElementById("ex-close").style.display = "none";
}


// /****************** */
// /*	 PROJECT ITEMS  */
// /****************** */

// function showProject(project) {
// 	// check if current page url = projects.html
// 	if(window.location.href.indexOf("projects") != -1){
// 		project();
// 	} else  {
// 	// change url to projects.html
// 	x = true;
// 	item = project;
// 	// change url to projects.html
// 	window.location.replace("projects.html");
// 	return x;
// 	}
// }
function javaEX() {
  document.getElementById("java").style.display = "block";
  document.getElementById("pediabuilder").style.display = "block";
  document.getElementById("monomano").style.display = "block";
  document.getElementById("csharp").style.display = "none";
  document.getElementById("dCalc").style.display = "none";
  document.getElementById("sEase").style.display = "none";
  document.getElementById("rTool").style.display = "none";
	document.getElementById("ex-close").style.display = "block";
	if (window.innerWidth >= 900) {
		document.getElementById("ex-leftline").style.display = "inline";
		document.getElementById("ex-rightline").style.display = "inline";
	}
}
function csharpEX() {
  document.getElementById("csharp").style.display = "block";
  document.getElementById("dCalc").style.display = "block";
  document.getElementById("sEase").style.display = "block";
  document.getElementById("rTool").style.display = "block";
  document.getElementById("java").style.display = "none";
  document.getElementById("pediabuilder").style.display = "none";
  document.getElementById("monomano").style.display = "none";
	document.getElementById("ex-close").style.display = "block";
	if (window.innerWidth >= 900) {
		document.getElementById("ex-leftline").style.display = "inline";
		document.getElementById("ex-rightline").style.display = "inline";
	}
}
function closeExamples() {
	document.getElementById("java").style.display = "none";
	document.getElementById("csharp").style.display = "none";
	document.getElementById("ex-leftline").style.display = "none";
	document.getElementById("ex-rightline").style.display = "none";
	document.getElementById("ex-close").style.display = "none";
}
// function closeExamples() {
// 	document.getElementById("dCalc").style.display = "none";
// 	document.getElementById("sEase").style.display = "none";
// 	document.getElementById("rTool").style.display = "none";
// 	document.getElementById("ex-leftline").style.display = "none";
// 	document.getElementById("ex-rightline").style.display = "none";
// 	document.getElementById("ex-close").style.display = "none";
// }
















/*


function courseA() {
	var lineAB = "<div id=\"isds4125\"> <h2>ISDS 4125</h2>";
	var lineCD = "<h2>ISDS 4125</h2><h3>Analysis and Design of Management Information Systems</h3><div><strong>Course Description:</strong></div>";
	var lineE = "<div>Design philosophies and techniques for the creation of information systems for management decision-making; conceptual design of actual information systems.</div>";
	document.getElementById("main").innerHTML = lineAB + lineCD	+ lineE + "<br></div>;";
}
function courseB() {
	var lineAB = "<div id=\"isds3110\"> <h2>ISDS 3110</h2>";
	var lineCD = "<h2>ISDS 3110</h2><h3>Analysis and Design of Management Information Systems</h3><div><strong>Course Description:</strong></div>";
	var lineE = "<div>Design philosophies and techniques for the creation of information systems for management decision-making; conceptual design of actual information systems.</div>";
	document.getElementById("main").innerHTML = lineAB + lineCD	+ lineE + "<br></div>;";				
}
function courseC() {
	var lineAB = "<div id=\"isds3200\"> <h2>ISDS 3200</h2>";
	var lineCD = "<h2>ISDS 3200</h2><h3>Analysis and Design of Management Information Systems</h3><div><strong>Course Description:</strong></div>";
	var lineE = "<div>Design philosophies and techniques for the creation of information systems for management decision-making; conceptual design of actual information systems.</div>";
	document.getElementById("main").innerHTML = lineAB + lineCD	+ lineE + "<br></div>;";	
}
function courseD() {
	var lineAB = "<div id=\"isds3105\"> <h2>ISDS 3105</h2>";
	var lineCD = "<h2>ISDS 3105</h2><h3>Analysis and Design of Management Information Systems</h3><div><strong>Course Description:</strong></div>";
	var lineE = "<div>Design philosophies and techniques for the creation of information systems for management decision-making; conceptual design of actual information systems.</div>";
	document.getElementById("main").innerHTML = lineAB + lineCD	+ lineE + "<br></div>;";	
}

function changeCourses(e) {
	var courseID = e.target.id;
	switch (courseID) {
    case "4125":
      document.getElementById("isds4125").style.display = "block";
	  document.getElementById("isds3110").style.display = "none";
	  document.getElementById("isds3200").style.display = "none";
	  document.getElementById("isds3105").style.display = "none";
    break;
	case "3110":
      document.getElementById("isds4125").style.display = "none";
	  document.getElementById("isds3110").style.display = "block";
	  document.getElementById("isds3200").style.display = "none";
	  document.getElementById("isds3105").style.display = "none";
    break;
	case "3200":
      document.getElementById("isds4125").style.display = "none";
	  document.getElementById("isds3110").style.display = "none";
	  document.getElementById("isds3200").style.display = "block";
	  document.getElementById("isds3105").style.display = "none";
    break;
	case "3105":
      document.getElementById("isds4125").style.display = "none";
	  document.getElementById("isds3110").style.display = "none";
	  document.getElementById("isds3200").style.display = "none";
	  document.getElementById("isds3105").style.display = "block";
    break;
	}
}
*/
// function courseA() {
// 	if(window.location.href.indexOf("courses") != -1){
// 		document.getElementById("isds3110").style.display = "none";
// 		document.getElementById("isds3200").style.display = "none";
// 		document.getElementById("isds3105").style.display = "none";
// 		document.getElementById("isds4125").style.display = "block";
// 	} else {
// 		window.open("courses.html");
// 		document.getElementById("isds3110").style.display = "none";
// 		document.getElementById("isds3200").style.display = "none";
// 		document.getElementById("isds3105").style.display = "none";
// 		document.getElementById("isds4125").style.display = "block";
// 	}	
// }
// function courseB() {
// 	if(window.location.href.indexOf("courses") != -1){
// 		document.getElementById("isds4125").style.display = "none";
// 		document.getElementById("isds3200").style.display = "none";
// 		document.getElementById("isds3105").style.display = "none";
// 		document.getElementById("isds3110").style.display = "block";
// 	} else {
// 		window.open("courses.html");
// 		document.getElementById("isds4125").style.display = "none";
// 		document.getElementById("isds3200").style.display = "none";
// 		document.getElementById("isds3105").style.display = "none";
// 		document.getElementById("isds3110").style.display = "block";
// 	}
// }
// function courseC() {
// 	if(window.location.href.indexOf("courses") != -1){
// document.getElementById("isds4125").style.display = "none";
// document.getElementById("isds3110").style.display = "none";
// document.getElementById("isds3105").style.display = "none";
// document.getElementById("isds3200").style.display = "block";
// 	} else {
// 		window.open("courses.html");
// 		document.getElementById("isds4125").style.display = "none";
// 		document.getElementById("isds3110").style.display = "none";
// 		document.getElementById("isds3105").style.display = "none";
// 		document.getElementById("isds3200").style.display = "block";
// 	}
// }
// function courseD() {
// 	if(window.location.href.indexOf("courses") != -1){
// 		document.getElementById("isds4125").style.display = "none";
// 		document.getElementById("isds3110").style.display = "none";
// 		document.getElementById("isds3200").style.display = "none";
// 		document.getElementById("isds3105").style.display = "block";	
// 	} else {
// 		window.open("courses.html");
// document.getElementById("isds4125").style.display = "none";
// document.getElementById("isds3110").style.display = "none";
// document.getElementById("isds3200").style.display = "none";
// document.getElementById("isds3105").style.display = "block";
// 	}
// }
// function projA() {
// 	if(window.location.href.indexOf("projects") != -1){
// document.getElementById("dCalc").style.display = "block";
// document.getElementById("sEase").style.display = "none";
// document.getElementById("rTool").style.display = "none";
// 	} else {
// 		window.open("projects.html");
// 		document.getElementById("dCalc").style.display = "block";
// 		document.getElementById("sEase").style.display = "none";
// 		document.getElementById("rTool").style.display = "none";
// 	}
// }
// function projB() {
// 	if(window.location.href.indexOf("projects") != -1){
// document.getElementById("dCalc").style.display = "none";
// document.getElementById("sEase").style.display = "block";
// document.getElementById("rTool").style.display = "none";
// 	} else {
// 		window.open("projects.html");
// 		document.getElementById("dCalc").style.display = "none";
// 		document.getElementById("sEase").style.display = "block";
// 		document.getElementById("rTool").style.display = "none";
// 	}
// }
// function projC() {
// 	if(window.location.href.indexOf("projects") != -1){
// document.getElementById("dCalc").style.display = "none";
// document.getElementById("sEase").style.display = "none";
// document.getElementById("rTool").style.display = "block";
// 	} else {
// 		window.open("projects.html");
// 		document.getElementById("dCalc").style.display = "none";
// 		document.getElementById("sEase").style.display = "none";
// 		document.getElementById("rTool").style.display = "block";
// 	}
// }