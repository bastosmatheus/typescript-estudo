// classe video deve ter os métodos play, pause e startevents, por que implementa o type VideoPlayerProtocol. Além de só ser istanciada com um objeto que tenha os atributos do type VideoPlayerElements.
export class Video {
    constructor(HTMLElements) {
        this.buttonPlay = HTMLElements.buttonPlay;
        this.buttonStop = HTMLElements.buttonStop;
        this.videoPlayer = HTMLElements.videoPlayer;
    }
    play() {
        this.videoPlayer.play();
    }
    pause() {
        this.videoPlayer.pause();
    }
    startEvents() {
        this.buttonPlay.addEventListener("click", () => {
            if (this.videoPlayer.paused) {
                this.play();
                this.buttonPlay.textContent = "Pause";
                return;
            }
            this.pause();
            this.buttonPlay.textContent = "Play";
        });
        this.buttonStop.addEventListener("click", () => {
            this.pause();
            this.videoPlayer.currentTime = 0;
            this.buttonPlay.textContent = "Play";
        });
    }
}
const protocols = {
    buttonPlay: document.querySelector(".play"),
    buttonStop: document.querySelector(".stop"),
    videoPlayer: document.querySelector("video"),
};
const video = new Video(protocols);
video.startEvents();
