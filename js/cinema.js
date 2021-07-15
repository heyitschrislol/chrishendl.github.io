// const list = '[{"title":"Baby Gender Reveal","url":"https://www.youtube.com/embed/JN2iGKOGQFM"},{"title":"Chris and Jennifer Swimming","url":"https://www.youtube.com/embed/zTd71mMaaGQ"},{"title":"Xmas Baby Jordan and Hope","url":"https://www.youtube.com/embed/vCRi9De2iKc"}]';
// let movies = JSON.parse(list);

function setVideo(index) {
    let requestURL = 'https://raw.githubusercontent.com/heyitschrislol/chrishendl.github.io/master/js/movielist.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const movielist = request.response;
        document.getElementById("currentvid").setAttribute("src", movielist[index].url);
        document.getElementById("movietitle").innerText = movielist[index].title;
        document.getElementById("currentvid").setAttribute("title", movielist[index].title);
        document.getElementById("descriptiontext").innerText = movielist[index].description;
        document.getElementById("currentvid").load();
        
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