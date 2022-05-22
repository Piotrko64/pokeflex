import tokenSound from "../../Audio/tokens/Token.wav";

const tokenPlay = new Audio(tokenSound);

export default function stateAfterToken(state, id) {
    let newStateTokens = [...state.myTokens].filter((el) => el.id !== id);
    tokenPlay.play();
    return { ...state, myTokens: newStateTokens, whoAttackID: "", yourTurn: !state.yourTurn };
}
