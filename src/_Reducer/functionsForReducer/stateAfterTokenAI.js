import tokenSound from "../../Audio/tokens/Token2.wav";
import audioPlay from "../helpers/audioPlay";

export default function stateAfterTokenAI(state, id) {
    console.log(!state.enemyTeam.length);
    if (!state.enemyTeam.length) {
        return state;
    }
    let newStateTokens = [...state.enemyTokens].filter((el) => el.id !== id);
    audioPlay(tokenSound);
    return {
        ...state,
        myTeam: state.myTeam,
        enemyTeam: state.enemyTeam,
        enemyTokens: newStateTokens,
        yourTurn: !state.yourTurn,
        whoAttackID: "",
    };
}
