import clone from "lodash.clone";
export function deleteFromTeamTokenFn(state, name) {
    let newStateTokenFight = clone(state.TokensFight);

    newStateTokenFight = newStateTokenFight.filter((el) => el.name !== name);

    return { ...state, TokensFight: newStateTokenFight };
}
