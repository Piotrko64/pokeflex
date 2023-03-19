export function audioPlay(Music: string) {
    const audio: HTMLAudioElement = new Audio(Music);

    audio.play().catch(() => {
        console.warn("Something is wrong with sounds...");
    });

    audio.volume = Number(localStorage.getItem("volume") || 0.75);
}
