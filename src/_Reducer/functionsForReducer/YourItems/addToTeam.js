import clone from "lodash.clone";
export function addToTeamFn(state, pokemon) {
    let newStateTeamFight = clone(state.TeamFight);
    if (newStateTeamFight.find((el) => el.name === pokemon.name)) {
        return state;
    }
    if (newStateTeamFight.length === 3) {
        newStateTeamFight[2] = pokemon;
    } else {
        newStateTeamFight.push(pokemon);
    }

    return { ...state, TeamFight: newStateTeamFight };
}
