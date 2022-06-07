import clone from "lodash.clone";
export function deleteFromTeamFn(state, name) {
    let newStateTeamFight = clone(state.TeamFight);
    newStateTeamFight = newStateTeamFight.filter((el) => el.name !== name);

    return { ...state, TeamFight: newStateTeamFight };
}
