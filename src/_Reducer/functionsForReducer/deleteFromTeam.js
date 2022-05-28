import clone from "lodash.clone";
export function deleteFromTeam(state, id) {
    let newStateTeamFight = clone(state.TeamFight);
    newStateTeamFight = newStateTeamFight.filter((el) => el.id !== id);
    console.log(newStateTeamFight, id);
    return { ...state, TeamFight: newStateTeamFight };
}
