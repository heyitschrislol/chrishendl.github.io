let oldID = new String;
function setVideo(index, id) {
    // IN ORDER TO MAKE THIS WORK WITHOUT TRYING TO PULL FROM A LOCAL JSON FILE:
    // 1. Upload the json to a github repository
    // 2. On said GitHub repository, navigate to the json file url
    // 3. Click on 'Raw'
    // 4. Copy the url at the top
    let requestURL = 'https://raw.githubusercontent.com/heyitschrislol/chrishendl.github.io/master/js/movielist.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const movielist = request.response;
        document.getElementById(id).style.backgroundColor = "#cab781";
        if (document.getElementById(oldID) != null) {
            document.getElementById(oldID).style.backgroundColor = "#fff";
        }
        oldID = id;
        if (document.getElementById("descriptionbar").style.visibility != "visible") {
            document.getElementById("descriptionbar").style.visibility = "visible";
        }
        if (document.getElementById("theaterheader").style.visibility != "visible") {
            document.getElementById("theaterheader").style.visibility = 'visible';
        }
        // changeVisibility();
        document.getElementById("currentvid").setAttribute("src", movielist[index].url);
        document.getElementById("movietitle").innerText = movielist[index].title;
        document.getElementById("currentvid").setAttribute("title", movielist[index].title);
        document.getElementById("descriptiontext").innerText = movielist[index].description;
        document.getElementById("descriptiondate").innerHTML = "<b>Date:</b> " + movielist[index].date;
        document.getElementById("descriptionlength").innerHTML = "<b>Length:</b> " + movielist[index].length;
        document.getElementById("currentvid").load;
        
    }
}
function changeVisibility() {
    if (document.getElementById("descriptionbar").style.visibility === "hidden") {
        document.getElementById("descriptionbar").style.visibility = "visible";
    }
    if (document.getElementById("theaterheader").style.visibility != "visible") {
        document.getElementById("theaterheader").style.visibility = 'visible';
    }
}
function burgerTime() {
    if (document.getElementById("mobilemenu").style.display == "none") {
        document.getElementById("mobilemenu").style.display = "flex";
        document.getElementsByClassName("hamburger").style.width = "8px";
        document.getElementsByClassName("hamburger").style.height = "30px";
    } else {
        document.getElementById("mobilemenu").style.display = "none"
        document.getElementsByClassName("hamburger").style.width = "40px";
        document.getElementsByClassName("hamburger").style.height = "8px";
    }
}


function animateLogo() {
    var logo = document.getElementById("logo");
    
}