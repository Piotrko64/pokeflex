import clone from "lodash.clone";
export function deleteFromTeamFn(state, name) {
    let newStateTeamFight = clone(state.teamFight);
    newStateTeamFight = newStateTeamFight.filter((el) => el.name !== name);

    return { ...state, teamFight: newStateTeamFight };
}
