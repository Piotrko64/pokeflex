import tokenSound from "../../../Audio/tokens/Token2.wav";
import audioPlay from "../../../functions/audioPlay";

export default function stateAfterTokenAI(fn, id) {
    let newStateTokens = [...fn.enemyTokens].filter((el) => el.id !== id);
    audioPlay(tokenSound);
    return {
        ...fn,
        myTeam: fn.myTeam,
        enemyTeam: fn.enemyTeam,
        enemyTokens: newStateTokens,
        yourTurn: !fn.yourTurn,
        whoAttackID: "",
    };
}
