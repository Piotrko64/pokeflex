import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CompletePlayground from "../components/Playground/CompletePlayground";
import levels from "../data/dataLevels/levels";
import { levelInterface } from "../types/levels/levelInterface";
import { setEnemyTeam } from "../_Reducer/StateFight";

function SingleLevel() {
    const route = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [music, setMusic] = useState<HTMLAudioElement | undefined>();

    useEffect(() => {
        const idPathname = route.pathname.split("/")[2];

        const level: levelInterface = levels.find((el: levelInterface) => el.id === idPathname)!;
        if (!level) {
            navigate("/ChooseLevel");
            return;
        }
        const { enemyTeam, enemyTokens } = level;

        setMusic(level.music);

        dispatch(setEnemyTeam([enemyTeam, enemyTokens]));
    }, []);

    return <CompletePlayground music={music} />;
}

export default SingleLevel;
