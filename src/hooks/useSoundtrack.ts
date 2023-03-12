import { useEffect, useState } from "react";
export function useSoundtrack(music: string, volumeMusic: number) {
    const [audio, setAudio] = useState<HTMLAudioElement>(new Audio(music));

    function changeAudio(e: string) {
        setAudio(new Audio(e));
    }

    useEffect(() => {
        audio.volume = volumeMusic;
        localStorage.setItem("volume", audio.volume.toString());
    }, [volumeMusic]);

    useEffect(() => {
        audio.loop = true;
        audio.volume = volumeMusic;
        audio.play();
        return () => {
            audio.pause();
        };
    }, [audio]);
    return changeAudio;
}
