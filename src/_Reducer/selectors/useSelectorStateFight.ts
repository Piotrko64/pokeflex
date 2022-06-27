import { useSelector } from "react-redux";
import { stateFightInterface } from "../../types/_Reducer/stateFight";

export const useSelectorStateFight = () => {
    const win = useSelector((state: any) => state.StateFightsReducer.whoWin);

    const yourTurn = useSelector((state: any) => state.StateFightsReducer.yourTurn);

    const friendsTeam = useSelector((state: any) => state.StateFightsReducer.myTeam);
    const friendsTokens = useSelector((state: any) => state.StateFightsReducer.myTokens);

    const enemyTeam = useSelector((state: any) => state.StateFightsReducer.enemyTeam);
    const enemyTokens = useSelector((state: any) => state.StateFightsReducer.enemyTokens);

    return {
        win,
        yourTurn,
        friendsTeam,
        friendsTokens,
        enemyTeam,
        enemyTokens,
    };
};
