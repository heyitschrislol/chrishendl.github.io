
function courseA() {
	document.getElementById("isds3110").style.display = "none";
	document.getElementById("isds3200").style.display = "none";
	document.getElementById("isds3105").style.display = "none";
	document.getElementById("isds4125").style.display = "block";
}
function courseB() {
	document.getElementById("isds4125").style.display = "none";
	document.getElementById("isds3200").style.display = "none";
	document.getElementById("isds3105").style.display = "none";
	document.getElementById("isds3110").style.display = "block";
}
function courseC() {
	document.getElementById("isds4125").style.display = "none";
	document.getElementById("isds3110").style.display = "none";
	document.getElementById("isds3105").style.display = "none";
	document.getElementById("isds3200").style.display = "block";
}
function courseD() {
	document.getElementById("isds4125").style.display = "none";
	document.getElementById("isds3110").style.display = "none";
	document.getElementById("isds3200").style.display = "none";
	document.getElementById("isds3105").style.display = "block";
}

function startUp() {
  document.getElementById("4125").onclick = function() {courseA()};
  document.getElementById("3110").onclick = function() {courseB()};
  document.getElementById("3200").onclick = function() {courseC()};
  document.getElementById("3105").onclick = function() {courseD()};
  
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