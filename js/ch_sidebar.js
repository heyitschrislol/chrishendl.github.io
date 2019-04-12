/***************** */
/*	COURSE ITEMS   */
/***************** */
function courseA() {
	if(window.location.href.indexOf("courses") != -1){
		document.getElementById("isds3110").style.display = "none";
		document.getElementById("isds3200").style.display = "none";
		document.getElementById("isds3105").style.display = "none";
		document.getElementById("isds4125").style.display = "block";
	} else {
		window.open("courses.html");
	}	
}
function courseB() {
	if(window.location.href.indexOf("courses") != -1){
		document.getElementById("isds4125").style.display = "none";
		document.getElementById("isds3200").style.display = "none";
		document.getElementById("isds3105").style.display = "none";
		document.getElementById("isds3110").style.display = "block";
	} else {
		window.open("courses.html");
	}
}
function courseC() {
	if(window.location.href.indexOf("courses") != -1){
		document.getElementById("isds4125").style.display = "none";
		document.getElementById("isds3110").style.display = "none";
		document.getElementById("isds3105").style.display = "none";
		document.getElementById("isds3200").style.display = "block";
	} else {
		window.open("courses.html");
	}
}
function courseD() {
	if(window.location.href.indexOf("courses") != -1){
		document.getElementById("isds4125").style.display = "none";
		document.getElementById("isds3110").style.display = "none";
		document.getElementById("isds3200").style.display = "none";
		document.getElementById("isds3105").style.display = "block";	
	} else {
		window.open("courses.html");
	}
}

/****************** */
/*	 PROJECT ITEMS  */
/****************** */
function projA() {
	if(window.location.href.indexOf("projects") != -1){
		document.getElementById("dCalc").style.display = "block";
		document.getElementById("sEase").style.display = "none";
		document.getElementById("rTool").style.display = "none";
	} else {
		window.open("projects.html");
	}
}
function projB() {
	if(window.location.href.indexOf("projects") != -1){
		document.getElementById("dCalc").style.display = "none";
		document.getElementById("sEase").style.display = "block";
		document.getElementById("rTool").style.display = "none";
	} else {
		window.open("projects.html");
	}
}
function projC() {
	if(window.location.href.indexOf("projects") != -1){
		document.getElementById("dCalc").style.display = "none";
		document.getElementById("sEase").style.display = "none";
		document.getElementById("rTool").style.display = "block";
	} else {
		window.open("projects.html");
	}
}




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