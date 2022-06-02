import tokenSound from "../../Audio/tokens/Token.wav";
import audioPlay from "../helpers/audioPlay";

export default function stateAfterToken(state, id) {
    let newStateTokens = [...state.myTokens].filter((el) => el.id !== id);
    audioPlay(tokenSound);
    return { ...state, myTokens: newStateTokens, whoAttackID: "", yourTurn: !state.yourTurn };
}
