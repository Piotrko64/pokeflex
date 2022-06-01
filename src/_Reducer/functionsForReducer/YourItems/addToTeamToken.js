import clone from "lodash.clone";
export function addToTeamToken(state, token) {
    let newStateTokenFight = clone(state.TokensFight);
    if (newStateTokenFight.find((el) => el.name === token.name)) {
        return state;
    }
    if (newStateTokenFight.length === 3) {
        newStateTokenFight[2] = token;
    } else {
        newStateTokenFight.push(token);
    }

    return { ...state, TokensFight: newStateTokenFight };
}
