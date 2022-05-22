import CompletePlayground from "../components/Playground/completePlayground";
import quickGameSoundtrack from "../Audio/chill.mp3";
import { useEffect } from "react";
import { unmountComponentAtNode } from "react-dom";
function QuickGame() {
    useEffect(() => {
        // const chill = new Audio(quickGameSoundtrack);
        // chill.volume = 0.4;
        // chill.play();
    }, []);

    return <CompletePlayground />;
}

export default QuickGame;
