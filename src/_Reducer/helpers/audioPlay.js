let audio;
export default function audioPlay(Music) {
    audio = new Audio(Music);
    audio.play();
    audio.volume = localStorage.getItem("volume") || 0.75;
}
export function audioPause() {
    audio.pause();
}
