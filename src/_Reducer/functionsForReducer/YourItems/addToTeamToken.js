import clone from "lodash.clone";
export function addToTeamTokenFn(state, token) {
    let newStateTokenFight = clone(state.tokensFight);
    if (newStateTokenFight.find((el) => el.name === token.name)) {
        return state;
    }
    if (newStateTokenFight.length === 3) {
        newStateTokenFight[2] = token;
    } else {
        newStateTokenFight.push(token);
    }
    console.log({ ...state, tokensFight: newStateTokenFight });
    return { ...state, tokensFight: newStateTokenFight };
}
