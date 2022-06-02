import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import CompletePlayground from "../components/Playground/completePlayground";
import levels from "../data/dataLevels/levelsMainList";
import { setEnemyTeam } from "../_Actions/mainAction";

function SingleLevel() {
    const route = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        const idPathname = route.pathname.split("/")[2];

        const idLevel = levels.find((el) => el.id === idPathname);
        const enemyTeam = idLevel.enemyTeam;
        const enemyTokens = idLevel.enemyTokens;

        dispatch(setEnemyTeam(enemyTeam, enemyTokens));
    }, []);
    return <CompletePlayground />;
}

export default SingleLevel;
