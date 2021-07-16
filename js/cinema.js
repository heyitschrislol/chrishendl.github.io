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
// function getMovieList() {
//     let requestURL = 'https://github.com/heyitschrislol/chrishendl.github.io/blob/master/js/movielist.json';
//     let request = new XMLHttpRequest();
//     request.open('GET', requestURL);
//     request.responseType = 'json';
//     request.send();
//     request.onload = function() {
//         const movielist = request.response;

//     }

// }


// function poopee() {
//     const list = '[{"title":"Baby Gender Reveal","url":"https://www.youtube.com/embed/JN2iGKOGQFM"},{"title":"Chris and Jennifer Swimming","url":"https://www.youtube.com/embed/zTd71mMaaGQ"}]';
//     movies = JSON.parse(list);
//     // alert(movies[1].url);
//     document.getElementById("currentvid").setAttribute("src", movies[0].url);
//     document.getElementById("currentvid").load();
//     document.getElementById("movietitle").innerText = movies[0].title;
// }