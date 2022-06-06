import clone from "lodash.clone";
export function deleteFromTeamFn(state, name) {
    let newStateTeamFight = clone(state.TeamFight);
    newStateTeamFight = newStateTeamFight.filter((el) => el.name !== name);
    console.log(newStateTeamFight);
    return { ...state, TeamFight: newStateTeamFight };
}
