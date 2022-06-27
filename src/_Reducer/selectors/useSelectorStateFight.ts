import { useSelector } from "react-redux";
import { stateFightInterface } from "../../types/_Reducer/stateFight";

export const useSelectorStateFight = () => {
    const whoWin = useSelector((state: any) => state.StateFightsReducer.whoWin);

    const yourTurn = useSelector((state: any) => state.StateFightsReducer.yourTurn);

    const myTeam = useSelector((state: any) => state.StateFightsReducer.myTeam);
    const myTokens = useSelector((state: any) => state.StateFightsReducer.myTokens);

    const enemyTeam = useSelector((state: any) => state.StateFightsReducer.enemyTeam);
    const enemyTokens = useSelector((state: any) => state.StateFightsReducer.enemyTokens);

    return {
        whoWin,
        yourTurn,
        myTeam,
        myTokens,
        enemyTeam,
        enemyTokens,
    };
};
