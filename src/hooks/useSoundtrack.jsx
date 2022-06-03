import { useEffect, useState } from "react";

export default function useSountrack(music, volumeMusic) {
    const [audio, setAudio] = useState(new Audio(music));

    function changeAudio(e) {
        setAudio(new Audio(e));
    }
    useEffect(() => {
        audio.volume = volumeMusic;

        localStorage.setItem("volume", audio.volume);
    }, [volumeMusic]);

    useEffect(() => {
        audio.loop = true;
        audio.volume = volumeMusic;
        console.log(audio);
        audio.play();

        return () => {
            audio.pause();
        };
    }, [audio]);

    return changeAudio;
}
