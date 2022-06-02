import { useEffect, useState } from "react";

export default function useSountrack(music, volumeMusic) {
    const [audio] = useState(new Audio(music));

    useEffect(() => {
        audio.volume = volumeMusic / 100;
    }, [volumeMusic]);

    useEffect(() => {
        audio.loop = true;
        audio.volume = volumeMusic / 100;
        audio.play();

        return () => {
            audio.pause();
        };
    }, []);

    return;
}
