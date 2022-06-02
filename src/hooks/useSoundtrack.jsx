import { useEffect, useState } from "react";

export default function useSountrack(music, volumeMusic) {
    const [audio] = useState(new Audio(music));

    useEffect(() => {
        audio.volume = volumeMusic;

        localStorage.setItem("volume", audio.volume);
    }, [volumeMusic]);

    useEffect(() => {
        audio.loop = true;
        audio.volume = volumeMusic;
        audio.play();

        return () => {
            audio.pause();
        };
    }, []);

    return;
}
