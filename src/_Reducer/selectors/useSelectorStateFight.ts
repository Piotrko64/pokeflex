import { allStateReducer } from "./../../types/_Reducer/allStateReducer";
import { useSelector } from "react-redux";

export const useSelectorStateFight = () => {
    const all = useSelector((state: allStateReducer) => state.StateFightsReducer);

    const whoWin = useSelector((state: allStateReducer) => state.StateFightsReducer.whoWin);

    const whoAttackID = useSelector((state: allStateReducer) => state.StateFightsReducer.whoAttackID);

    const yourTurn = useSelector((state: allStateReducer) => state.StateFightsReducer.yourTurn);

    const myTeam = useSelector((state: allStateReducer) => state.StateFightsReducer.myTeam);
    const myTokens = useSelector((state: allStateReducer) => state.StateFightsReducer.myTokens);

    const enemyTeam = useSelector((state: allStateReducer) => state.StateFightsReducer.enemyTeam);
    const enemyTokens = useSelector((state: allStateReducer) => state.StateFightsReducer.enemyTokens);

    const allCoordinates = useSelector((state: allStateReducer) => state.StateFightsReducer.allCoordinates);
    return {
        all,
        whoWin,
        yourTurn,
        myTeam,
        myTokens,
        enemyTeam,
        enemyTokens,
        whoAttackID,
        allCoordinates,
    };
};
