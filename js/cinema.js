const list = '[{"title":"Baby Gender Reveal","url":"https://www.youtube.com/embed/JN2iGKOGQFM"},{"title":"Chris and Jennifer Swimming","url":"https://www.youtube.com/embed/zTd71mMaaGQ"},{"title":"Xmas Baby Jordan and Hope","url":"https://www.youtube.com/embed/vCRi9De2iKc"}]';
// let movies = JSON.parse(list);
let requestURL = 'https://github.com/heyitschrislol/chrishendl.github.io/blob/master/js/movielist.json';
let request = new XMLHttpRequest();

function setVideo(index) {
    const list = '[{"title":"Baby Gender Reveal","url":"https://www.youtube.com/embed/JN2iGKOGQFM"},{"title":"Chris and Jennifer Swimming","url":"https://www.youtube.com/embed/zTd71mMaaGQ"},{"title":"Xmas Baby Jordan and Hope","url":"https://www.youtube.com/embed/vCRi9De2iKc"}]';
    var movies = JSON.parse(list);
    // var video = document.getElementById("currentvid");
    // var movietitle = document.getElementById("movietitle");
    // var url = movies[index].url;
    

    document.getElementById("tester").innerText = movies[index].title;
    document.getElementById("currentvid").setAttribute("src", movies[index].url);
    document.getElementById("currentvid").load();
    document.getElementById("movietitle").innerText = movies[index].title;
}
function getVideoList() {
    let requestURL = 'https://github.com/heyitschrislol/chrishendl.github.io/blob/master/js/movielist.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const movielist = request.response;
        
    }

}
// function testList() {
//     const data = require("./movielist.json");
//     console.log(data);
//     fetch("./movielist.json")
//     .then(response => {
//        return response.json();
//     })
//     .then(data => console.log(data));
//     var count = 0;
//     count = movies.count;
//     alert(count);
// }


function poopee() {
    const list = '[{"title":"Baby Gender Reveal","url":"https://www.youtube.com/embed/JN2iGKOGQFM"},{"title":"Chris and Jennifer Swimming","url":"https://www.youtube.com/embed/zTd71mMaaGQ"}]';
    movies = JSON.parse(list);
    // alert(movies[1].url);
    document.getElementById("currentvid").setAttribute("src", movies[0].url);
    document.getElementById("currentvid").load();
    document.getElementById("movietitle").innerText = movies[0].title;
}






// function loadVideo() {
//     var supportsVideo = !!document.createElement('video').canPlayType;
//     if (supportsVideo) {
//         var videoContainer = document.getElementById('videoContainer');
//         var video = document.getElementById('video');
//         var videoControls = document.getElementById('video-controls');

//         // Hide the default controls
//         video.controls = false;

//         // Display the user defined video controls
//         videoControls.style.display = 'block';

//         var playpause = document.getElementById('playpause');
//         var stop = document.getElementById('stop');
//         var mute = document.getElementById('mute');
//         var volinc = document.getElementById('volinc');
//         var voldec = document.getElementById('voldec');
//         var progress = document.getElementById('progress');
//         var progressBar = document.getElementById('progress-bar');
//         var fullscreen = document.getElementById('fs');

//         playpause.addEventListener('click', function (e) {
//             if (video.paused || video.ended) video.play();
//             else video.pause();
//         });
//         stop.addEventListener('click', function (e) {
//             video.pause();
//             video.currentTime = 0;
//             progress.value = 0;
//         });
//         mute.addEventListener('click', function (e) {
//             video.muted = !video.muted;
//         });
//         volinc.addEventListener('click', function (e) {
//             alterVolume('+');
//         });
//         voldec.addEventListener('click', function (e) {
//             alterVolume('-');
//         });
//         var alterVolume = function (dir) {
//             var currentVolume = Math.floor(video.volume * 10) / 10;
//             if (dir === '+') {
//                 if (currentVolume < 1) video.volume += 0.1;
//             } else if (dir === '-') {
//                 if (currentVolume > 0) video.volume -= 0.1;
//             }
//         }

//         video.addEventListener('loadedmetadata', function () {
//             progress.setAttribute('max', video.duration);
//         });
//         video.addEventListener('timeupdate', function () {
//             progress.value = video.currentTime;
//             progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
//         });
//         video.addEventListener('timeupdate', function () {
//             if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
//             progress.value = video.currentTime;
//             progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
//         });
//         progress.addEventListener('click', function (e) {
//             var rect = this.getBoundingClientRect();
//             var pos = (e.pageX - rect.left) / this.offsetWidth;
//             video.currentTime = pos * video.duration;
//         });

//         // FULL SCREEN HANDLERS
//         var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
//         if (!fullScreenEnabled) {
//             fullscreen.style.display = 'none';
//         }
//         fullscreen.addEventListener('click', function (e) {
//             handleFullscreen();
//         });
//         var handleFullscreen = function () {
//             if (isFullScreen()) {
//                 if (document.exitFullscreen) document.exitFullscreen();
//                 else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
//                 else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
//                 else if (document.msExitFullscreen) document.msExitFullscreen();
//                 setFullscreenData(false);
//             } else {
//                 if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
//                 else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
//                 else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
//                 else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
//                 setFullscreenData(true);
//             }
//         }
//         var isFullScreen = function () {
//             return !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
//         }
//         var setFullscreenData = function (state) {
//             videoContainer.setAttribute('data-fullscreen', !!state);
//         }
//         document.addEventListener('fullscreenchange', function (e) {
//             setFullscreenData(!!(document.fullscreen || document.fullscreenElement));
//         });
//         document.addEventListener('webkitfullscreenchange', function () {
//             setFullscreenData(!!document.webkitIsFullScreen);
//         });
//         document.addEventListener('mozfullscreenchange', function () {
//             setFullscreenData(!!document.mozFullScreen);
//         });
//         document.addEventListener('msfullscreenchange', function () {
//             setFullscreenData(!!document.msFullscreenElement);
//         });
//     }

// }