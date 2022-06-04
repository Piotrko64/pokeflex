import { useEffect } from "react";
import { useDispatch } from "react-redux";
import setRandomEnemyQG from "../../functions/QuickGame/setRandomEnemyQG";
import { setEnemyTeam } from "../../_Actions/stateFightActions";

const UseQuickGameEnemy = () => {
    const dispatch = useDispatch();
    const enemy = setRandomEnemyQG();

    useEffect(() => {
        dispatch(setEnemyTeam(enemy[0], enemy[1]));
    }, []);
    return;
};

export default UseQuickGameEnemy;
