type VideoPlayerElements = {
  buttonStop: HTMLButtonElement;
  buttonPlay: HTMLButtonElement;
  videoPlayer: HTMLVideoElement;
};

type VideoPlayerProtocol = {
  play(): void;
  pause(): void;
  startEvents(): void;
};

// classe video deve ter os métodos play, pause e startevents, por que implementa o type VideoPlayerProtocol. Além de só ser istanciada com um objeto que tenha os atributos do type VideoPlayerElements.

export class Video implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private buttonStop: HTMLButtonElement;
  private buttonPlay: HTMLButtonElement;

  constructor(HTMLElements: VideoPlayerElements) {
    this.buttonPlay = HTMLElements.buttonPlay;
    this.buttonStop = HTMLElements.buttonStop;
    this.videoPlayer = HTMLElements.videoPlayer;
  }

  play(): void {
    this.videoPlayer.play();
  }

  pause(): void {
    this.videoPlayer.pause();
  }

  startEvents(): void {
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
  buttonPlay: document.querySelector(".play") as HTMLButtonElement,
  buttonStop: document.querySelector(".stop") as HTMLButtonElement,
  videoPlayer: document.querySelector("video") as HTMLVideoElement,
};

const video = new Video(protocols);

video.startEvents();
