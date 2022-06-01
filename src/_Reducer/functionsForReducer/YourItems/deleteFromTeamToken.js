import clone from "lodash.clone";
export function deleteFromTeamToken(state, name) {
    let newStateTokenFight = clone(state.TokensFight);

    newStateTokenFight = newStateTokenFight.filter((el) => el.name !== name);

    return { ...state, TokensFight: newStateTokenFight };
}
