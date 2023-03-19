import { useEffect, useState } from "react";
export function useSoundtrack(music: string, volumeMusic: number) {
    const [audio, setAudio] = useState<HTMLAudioElement>(new Audio(music));

    function changeAudio(nameAudio: string) {
        setAudio(new Audio(nameAudio));
    }

    useEffect(() => {
        audio.volume = volumeMusic;
        localStorage.setItem("volume", audio.volume.toString());
    }, [volumeMusic]);

    useEffect(() => {
        audio.loop = true;
        audio.volume = volumeMusic;

        audio.play().catch(() => {
            console.warn("Ooops!!! Something is wrong with music!");
        });

        return () => {
            audio.pause();
        };
    }, [audio]);
    return changeAudio;
}
