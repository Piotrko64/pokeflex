export function audioPlay(Music: string) {
    const audio: HTMLAudioElement = new Audio(Music);
    audio.play();
    audio.volume = Number(localStorage.getItem("volume")) || 0.75;
}
