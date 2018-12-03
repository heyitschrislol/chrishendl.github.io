// Functions set to load when window loads
window.onload = timeCalc;

// Variables to hold user and time values
var totaltime;
totaltime = 0;
var allusers = [{}];

// Primary function
function timeCalc() {
	
	// Set the required time
	var requiredtime;
	requiredtime = 3.0;	
	
	
	// Create event listener for button input
	var calc = document.getElementById("submit");	
	calc.addEventListener("click", function() {
		// Get user id
		var userID = document.getElementById("userID").value;
		// Get hours
		var inputhours = Number(document.getElementById("hours").value);
		// Get minutes
		var inputmins = Number(document.getElementById("minutes").value);	
		// Add hours and minutes and convert to hour format
		var calctime = inputhours + (inputmins/60);	
		
		// Verify if the user exists already and if so get current time		
		var index;		
		 if (userTrack(userID)) {	
			index =  userIndex(userID);
			allusers[index].time += calctime;		 
		}
		else {
			allusers.push({ id: userID, time: calctime });
			index = userIndex(userID);
		}
		totaltime = allusers[index].time;
		
		
		// Display total time
		document.getElementById("mytime").innerHTML = "User: " + allusers[index].id + " - Total time: " + totaltime;
		//Check to see if total time meets the requirements
		if (totaltime < 0) {
			document.getElementById("results").style.color = "red";
			document.getElementById("results").innerHTML = "Please enter valid time values";
		}
		else if (totaltime < requiredtime) {
			var needtime = requiredtime - totaltime;
			document.getElementById("results").style.color = "red";
			document.getElementById("results").innerHTML = "Requirement not yet met. You have " + totaltime + " hours. You need " + needtime + " hours more in order to meet your requirement.";
		}
		else {
			document.getElementById("results").style.color = "green";
			document.getElementById("results").innerHTML = "Requirement met!";
		}

		// Keep log of submissions
		var game = document.getElementById("desc").value;
		var innerhtml;		
		innerhtml += "<li><p>User " + allusers[index].id + " added " + calctime + " hours playing " + game + "</p></li>";
		document.getElementById("side-log").innerHTML = innerhtml;
		
		
	});			
}
// function to check if userID exists currently
function userTrack(id) {
	return allusers.some(function (e) {
		return e.id === id;
	  });
}
// function to track the index of the userID in the allusers array
function userIndex(id) {
	return allusers.findIndex(function (e) {
		return e.id === id;
	  });
}




