import clone from "lodash.clone";
export function addToTeam(state, pokemon) {
    let newStateTeamFight = clone(state.TeamFight);
    if (newStateTeamFight.find((el) => el.id === pokemon.id)) {
        return state;
    }
    if (newStateTeamFight.length === 3) {
        newStateTeamFight[2] = pokemon;
    } else {
        newStateTeamFight.push(pokemon);
    }

    return { ...state, TeamFight: newStateTeamFight };
}
