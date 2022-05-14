const MORE_HP = 12;

export default function fountain(state) {
    const newState = JSON.parse(JSON.stringify(state));
    const newStateMyTeam = [...newState.myTeam];

    let thisFriendPokemon = newStateMyTeam.sort((a, b) => {
        return b.hp - a.hp;
    })[0];
    thisFriendPokemon = { ...thisFriendPokemon, type: "Water", hp: thisFriendPokemon.hp + MORE_HP };
    const thisFriendPokemonIndex = newState.myTeam.findIndex((el) => el.id === thisFriendPokemon.id);
    let myTeam = newState.myTeam;
    myTeam[thisFriendPokemonIndex] = thisFriendPokemon;

    return { ...state, myTeam };
}
