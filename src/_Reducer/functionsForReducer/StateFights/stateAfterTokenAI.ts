import { StateFightInterface } from "../../../types/_Reducer/StateFight";
import tokenSound from "../../../Audio/tokens/Token2.wav";
import { audioPlay } from "../../../functions/audioPlay";

export function stateAfterTokenAI(fn: StateFightInterface, id: string) {
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
