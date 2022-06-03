export default function audioPlay(Music) {
    const audio = new Audio(Music);
    audio.play();
    audio.volume = localStorage.getItem("volume") || 0.75;
}
