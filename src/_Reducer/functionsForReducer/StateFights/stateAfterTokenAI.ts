import { StateFightInterface } from "../../../@types/_Reducer/StateFight";
import tokenSound from "../../../Audio/tokens/Token2.wav";
import { audioPlay } from "../../../functions/audioPlay";

export function stateAfterTokenAI(stateFight: StateFightInterface, id: string) {
    if (stateFight.enemyTeam.length === 0 || stateFight.myTeam.length === 0) {
        return stateFight;
    }

    const newStateTokens = [...stateFight.enemyTokens].filter((el) => el.id !== id);
    audioPlay(tokenSound);
    return {
        ...stateFight,
        myTeam: stateFight.myTeam.filter(({ hp }) => hp > 0),
        enemyTeam: stateFight.enemyTeam.filter(({ hp }) => hp > 0),
        grave: [
            ...stateFight.grave,
            ...stateFight.myTeam.filter(({ hp }) => hp <= 0),
            ...stateFight.enemyTeam.filter(({ hp }) => hp <= 0),
        ],
        enemyTokens: newStateTokens,
        yourTurn: !stateFight.yourTurn,
        whoAttackID: "",
    };
}
