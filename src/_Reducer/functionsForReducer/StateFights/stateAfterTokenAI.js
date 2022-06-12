import tokenSound from "../../../Audio/tokens/Token2.wav";
import audioPlay from "../../../functions/audioPlay";

export default function stateAfterTokenAI(fn, id) {
    let newStateTokens = [...fn.enemyTokens].filter((el) => el.id !== id);
    audioPlay(tokenSound);
    return {
        ...fn,
        myTeam: fn.myTeam.filter(({ hp }) => hp > 0),
        enemyTeam: fn.enemyTeam.filter(({ hp }) => hp > 0),
        grave: [
            ...fn.grave,
            ...fn.myTeam.filter(({ hp }) => hp <= 0),
            ...fn.enemyTeam.filter(({ hp }) => hp <= 0),
        ],
        enemyTokens: newStateTokens,
        yourTurn: !fn.yourTurn,
        whoAttackID: "",
    };
}
