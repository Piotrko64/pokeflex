import { useSelector } from "react-redux";

export const useSelectorStateFight = () => {
    const all = useSelector((state: any) => state.StateFightsReducer);

    const whoWin = useSelector((state: any) => state.StateFightsReducer.whoWin);

    const whoAttackID = useSelector((state: any) => state.StateFightsReducer.whoAttackID);

    const yourTurn = useSelector((state: any) => state.StateFightsReducer.yourTurn);

    const myTeam = useSelector((state: any) => state.StateFightsReducer.myTeam);
    const myTokens = useSelector((state: any) => state.StateFightsReducer.myTokens);

    const enemyTeam = useSelector((state: any) => state.StateFightsReducer.enemyTeam);
    const enemyTokens = useSelector((state: any) => state.StateFightsReducer.enemyTokens);

    const allCoordinates = useSelector((state: any) => state.StateFightsReducer.allCoordinates);
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
