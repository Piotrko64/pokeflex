import CompletePlayground from "../components/Playground/completePlayground";
import quickGameSoundtrack from "../Audio/mainSoundtracks/Poke.mp3";
import { useEffect } from "react";
import { unmountComponentAtNode } from "react-dom";
function QuickGame() {
    useEffect(() => {
        const main = new Audio(quickGameSoundtrack);
        main.volume = 0.2;
        main.loop = true;
        main.play();
        return () => {
            main.pause();
        };
    }, []);

    return <CompletePlayground />;
}

export default QuickGame;
