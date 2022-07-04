import { StateFightInterface } from "../../../@types/_Reducer/StateFight";
import tokenSound from "../../../Audio/tokens/Token.wav";
import { audioPlay } from "../../../functions/audioPlay";

export function stateAfterToken(fn: StateFightInterface, id: string) {
    let newStateTokens = [...fn.myTokens].filter((el) => el.id !== id);
    audioPlay(tokenSound);

    return {
        ...fn,
        myTokens: newStateTokens,
        whoAttackID: "",
        yourTurn: !fn.yourTurn,
        myTeam: fn.myTeam.filter(({ hp }) => hp > 0),
        enemyTeam: fn.enemyTeam.filter(({ hp }) => hp > 0),
        grave: [
            ...fn.grave,
            ...fn.myTeam.filter(({ hp }) => hp <= 0),
            ...fn.enemyTeam.filter(({ hp }) => hp <= 0),
        ],
    };
}
