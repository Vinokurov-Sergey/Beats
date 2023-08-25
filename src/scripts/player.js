(function() {
    const player = document.querySelector('.video');

const playBigButton = document.querySelector('.player__start-big');
const playButton = document.querySelector('.player__start');
const progress = document.querySelector('.player__progress');
const progressLine = document.querySelector('.player__progress-line');

const volumeButon = document.querySelector('.player__volume-bar');
const volume = document.querySelector('.player__volume');
const volumeLevel = document.querySelector('.player__volume-line');

function playVideo() {
    if (!playButton.classList.contains('active')) {
        player.play();
        playButton.classList.add('active');
        player.classList.add('active');
    } else {
        player.pause();
        playButton.classList.remove('active');
        player.classList.remove('active');
    }
}

player.addEventListener('click', () => {
    playVideo();
})

playButton.addEventListener('click', () => {
    playVideo();
})

playBigButton.addEventListener('click', () => {
    playVideo();
})

player.addEventListener('timeupdate', () => {
    progressLine.style.width = `${player.currentTime / player.duration * 100}%`;
})

volumeButon.addEventListener('click', () => {
    if (player.volume > 0) {
        player.volume = 0;
        volumeLevel.style.width = 0;
    } else {
        player.volume = 1;
        volumeLevel.style.width = `${100}%`;
    }
})

function getLevel(object, clickX) {
    var objectWidth = getComputedStyle(object).width;
    let level = 100 * clickX / parseInt(objectWidth);
    return level;
}

volume.addEventListener('click', (e) => {
    let level = getLevel(volume, e.offsetX);
    volumeLevel.style.width = `${level}%`;
    player.volume = level/100;
})

progress.addEventListener('click', (e) => {
    let level = getLevel(progress, e.offsetX);
    progressLine.style.width = `${level}%`;
    player.currentTime = player.duration * level / 100;
})
})()

