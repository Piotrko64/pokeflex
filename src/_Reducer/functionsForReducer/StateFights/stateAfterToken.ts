import { StateFightInterface } from "../../../@types/_Reducer/StateFight";
import tokenSound from "../../../Audio/tokens/Token.wav";
import { audioPlay } from "../../../functions/audioPlay";
import WinSound from "../../../Audio/winLose/Win.wav";
import LoseSound from "../../../Audio/winLose/Lose.wav";
import RemisSound from "../../../Audio/winLose/Scream.wav";

export function stateAfterToken(stateFight: StateFightInterface, id: string) {
    const newStateTokens = [...stateFight.myTokens].filter((el) => el.id !== id);
    audioPlay(tokenSound);

    const enemyTeam = stateFight.enemyTeam.filter(({ hp }) => hp > 0);
    const myTeam = stateFight.myTeam.filter(({ hp }) => hp > 0);

    function whoIsWinIfEndGame(): string | false {
        if (myTeam.length === 0 && enemyTeam.length === 0) {
            audioPlay(RemisSound);
            return "remis";
        } else if (myTeam.length === 0) {
            audioPlay(LoseSound);
            return "lose";
        } else if (enemyTeam.length === 0) {
            audioPlay(WinSound);
            return "win";
        } else return false;
    }

    return {
        ...stateFight,
        myTokens: newStateTokens,
        whoWin: whoIsWinIfEndGame(),
        whoAttackID: "",
        yourTurn: !stateFight.yourTurn,
        myTeam: stateFight.myTeam.filter(({ hp }) => hp > 0),
        enemyTeam,
        grave: [
            ...stateFight.grave,
            ...stateFight.myTeam.filter(({ hp }) => hp <= 0),
            ...stateFight.enemyTeam.filter(({ hp }) => hp <= 0),
        ],
    };
}
