const MORE_HP = 16;

export default function fountain(state, AI) {
    const newState = JSON.parse(JSON.stringify(state));
    // AI move
    if (AI) {
        const newStateMyTeam = [...newState.enemyTeam];
        let thisFriendPokemon = newStateMyTeam.enemyTeam.sort((a, b) => {
            return b.hp - a.hp;
        })[0];
        thisFriendPokemon = { ...thisFriendPokemon, type: "Water", hp: thisFriendPokemon.hp + MORE_HP };
        const thisFriendPokemonIndex = newState.enemyTeam.findIndex((el) => el.id === thisFriendPokemon.id);
        let enemyTeam = newState.enemyTeam;
        enemyTeam[thisFriendPokemonIndex] = thisFriendPokemon;

        return { ...state, enemyTeam };
    } else {
        // your move
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
}
