function toggleVideo(button) {
    var video = button.previousElementSibling;
    if (video.paused) {
        playVideo(video);
        button.classList.add('playing');
        button.querySelector('.play-icon').src = './public/icons/now-courses/pause.png';
    } else {
        pauseVideo(video);
        button.classList.remove('playing');
        button.querySelector('.play-icon').src = './public/icons/now-courses/play (3).png';
    }

    video.addEventListener('ended', function () {
        button.querySelector('.play-icon').src = './public/icons/now-courses/play (3).png';
    });
}

function playVideo(video) {
    video.play();
}

function pauseVideo(video) {
    video.pause();
}