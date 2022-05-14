const MORE_SPEED = 25;

export default function sacrifice(state) {
    const newState = JSON.parse(JSON.stringify(state));
    const newStateMyTeam = [...newState.myTeam];

    let sortPokemonsSpecialAttack = newStateMyTeam.sort((a, b) => {
        return b.specialAttack - a.specialAttack;
    });
    const pokemonLeastSpecialAttackIndex = sortPokemonsSpecialAttack[newStateMyTeam.length - 1].id;
    const pokemonMostSpecialAttack = (sortPokemonsSpecialAttack[0].speed += MORE_SPEED);
    let myTeam = newStateMyTeam;
    return { ...state, myTeam };
}
