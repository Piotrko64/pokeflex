import { useEffect } from "react";
import { useDispatch } from "react-redux";
import setRandomEnemyQG from "../../functions/QuickGame/setRandomEnemyQG";
import { setEnemyTeam } from "../../_Reducer/StateFight";

export const useQuickGameEnemy = () => {
    const dispatch = useDispatch();
    const enemy = setRandomEnemyQG();

    useEffect(() => {
        dispatch(setEnemyTeam([enemy[0], enemy[1]]));
    }, []);
};
