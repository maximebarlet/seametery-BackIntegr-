// LANCEMENT VIDEO INTRO
homeVideo = document.querySelector('.home__cta');
skipIntro = document.querySelector('.video__skip');
video = document.querySelector('.video__intro');
introProgressBar = document.querySelector('.video__progress');
videoSrc = document.querySelector('.video');

homeVideo.addEventListener('click', function() {
    video.classList.add('is-transition');
    skipIntro.classList.add('is-opacity');
    introProgressBar.classList.add('is-progressing');
    videoSrc.classList.remove('is-hidden');
    videoSrc.load();
    setTimeout(() => {
        document.location.href="expeditions.html";
    }, 72000)
});

