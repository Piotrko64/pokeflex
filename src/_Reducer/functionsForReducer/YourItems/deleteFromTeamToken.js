import clone from "lodash.clone";
export function deleteFromTeamToken(state, id) {
    let newStateTokenFight = clone(state.TokensFight);
    newStateTokenFight = newStateTokenFight.filter((el) => el.id !== id);
    console.log(newStateTokenFight, id);
    return { ...state, TokensFight: newStateTokenFight };
}
