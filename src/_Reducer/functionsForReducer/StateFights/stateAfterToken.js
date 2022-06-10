import tokenSound from "../../../Audio/tokens/Token.wav";
import audioPlay from "../../../functions/audioPlay";

export default function stateAfterToken(fn, id) {
    let newStateTokens = [...fn.myTokens].filter((el) => el.id !== id);
    audioPlay(tokenSound);

    return { ...fn, myTokens: newStateTokens, whoAttackID: "", yourTurn: !fn.yourTurn };
}
