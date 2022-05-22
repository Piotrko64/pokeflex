import tokenSound from "../../Audio/tokens/Token2.wav";

const tokenPlay = new Audio(tokenSound);

export default function stateAfterTokenAI(state, id) {
    let newStateTokens = [...state.enemyTokens].filter((el) => el.id !== id);
    tokenPlay.play();
    return {
        ...state,
        myTeam: state.myTeam,
        enemyTeam: state.enemyTeam,
        enemyTokens: newStateTokens,
        yourTurn: !state.yourTurn,
        whoAttackID: "",
    };
}
