const bgmusic = new Audio("./music/bg.mp3");
bgmusic.loop = true;
bgmusic.autoplay = true;
bgmusic.volume = .1;
bgmusic.play();

window.addEventListener("keyup", e => {
    if (e.key === " ") {
        bgmusic.paused ? bgmusic.play() : bgmusic.pause();
    }
})