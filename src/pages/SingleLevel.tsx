import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CompletePlayground } from "../components/Playground/CompletePlayground";
import { levels } from "../data/dataLevels/levels";
import { LevelInterface } from "../types/levels/LevelInterface";
import { setEnemyTeam } from "../_Reducer/StateFight";

function SingleLevel() {
    const route = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [music, setMusic] = useState<HTMLAudioElement>();

    useEffect(() => {
        const idPathname = route.pathname.split("/")[2];
        const level: LevelInterface = levels.find((el: LevelInterface) => el.id === idPathname)!;
        const { enemyTeam, enemyTokens } = level;

        if (!level) {
            navigate("/ChooseLevel");
            return;
        }

        setMusic(level.music);

        dispatch(setEnemyTeam([enemyTeam, enemyTokens]));
    }, []);

    return <CompletePlayground music={music} />;
}

export default SingleLevel;
