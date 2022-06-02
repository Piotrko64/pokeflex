import { useEffect } from "react";

export default function useSountrack(music, volume) {
    const main = new Audio(music);
    main.volume = volume;
    useEffect(() => {
        main.loop = true;
        main.play();
        return () => {
            main.pause();
        };
    }, []);

    return;
}
