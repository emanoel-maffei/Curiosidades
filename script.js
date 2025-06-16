const video = document.getElementById('video');
let video_pause = false;

video.addEventListener('click', () => {
    if (video_pause == false) {
        video.pause();
        video_pause = true;
    } else {
        video.play();
        video_pause = false;
    }
})