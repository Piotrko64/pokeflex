import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import CompletePlayground from "../components/Playground/completePlayground";
import levels from "../data/dataLevels/levelsMainList";
import { setEnemyTeam, setEnemyTeams } from "../_Actions/mainAction";

function SingleLevel() {
    const route = useLocation();
    const idPathname = route.pathname.split("/")[2];
    const dispatch = useDispatch();
    const idLevel = levels.find((el) => el.id === idPathname);
    const enemyTeam = idLevel.enemyTeam;
    const enemyTokens = idLevel.enemyTokens;
    console.log(enemyTeam);
    useEffect(() => {
        dispatch(setEnemyTeam(enemyTeam, enemyTokens));
        console.log();
    }, []);
    return <CompletePlayground />;
}

export default SingleLevel;
