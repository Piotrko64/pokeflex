import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import CompletePlayground from "../components/Playground/CompletePlayground";
import levels from "../data/dataLevels/levels";
import { setEnemyTeam } from "../_Reducer/StateFight";

function SingleLevel() {
    const route = useLocation();
    const dispatch = useDispatch();

    const [music, setMusic] = useState("");

    useEffect(() => {
        const idPathname = route.pathname.split("/")[2];

        const Level = levels.find((el) => el.id === idPathname);
        const enemyTeam = Level.enemyTeam;
        const enemyTokens = Level.enemyTokens;

        setMusic(Level.music);

        dispatch(setEnemyTeam([enemyTeam, enemyTokens]));
    }, []);

    return <CompletePlayground music={music} />;
}

export default SingleLevel;
