import { AllStateReducer } from "../../types/_Reducer/AllStateReducer";
import { useSelector } from "react-redux";

export const useSelectorStateFight = () => {
    const all = useSelector((state: AllStateReducer) => state.StateFightsReducer);

    const grave = useSelector((state: AllStateReducer) => state.StateFightsReducer.grave);

    const whereIsEnemy = useSelector((state: AllStateReducer) => state.StateFightsReducer.whereIsEnemy);

    const whoWin = useSelector((state: AllStateReducer) => state.StateFightsReducer.whoWin);

    const whoAttackID = useSelector((state: AllStateReducer) => state.StateFightsReducer.whoAttackID);

    const yourTurn = useSelector((state: AllStateReducer) => state.StateFightsReducer.yourTurn);

    const myTeam = useSelector((state: AllStateReducer) => state.StateFightsReducer.myTeam);
    const myTokens = useSelector((state: AllStateReducer) => state.StateFightsReducer.myTokens);

    const enemyTeam = useSelector((state: AllStateReducer) => state.StateFightsReducer.enemyTeam);
    const enemyTokens = useSelector((state: AllStateReducer) => state.StateFightsReducer.enemyTokens);

    const allCoordinates = useSelector((state: AllStateReducer) => state.StateFightsReducer.allCoordinates);
    return {
        all,
        grave,
        whoWin,
        yourTurn,
        myTeam,
        myTokens,
        enemyTeam,
        enemyTokens,
        whoAttackID,
        allCoordinates,
        whereIsEnemy,
    };
};
