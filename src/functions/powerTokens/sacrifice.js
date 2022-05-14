const MORE_SPEED = 25;

export default function sacrifice(state) {
    const newState = JSON.parse(JSON.stringify(state));
    const newStateMyTeam = [...newState.myTeam];

    let sortPokemonsSpecialAttack = [...newStateMyTeam].sort((a, b) => {
        return b.specialAttack - a.specialAttack;
    });
    const pokemonLeastSpecialAttack = sortPokemonsSpecialAttack[newStateMyTeam.length - 1];
    const pokemonMostSpecialAttack = {
        ...sortPokemonsSpecialAttack[0],
        speed: sortPokemonsSpecialAttack[0].speed + MORE_SPEED,
        hp: sortPokemonsSpecialAttack[0].hp + pokemonLeastSpecialAttack.hp,
    };

    let myTeam = newStateMyTeam;
    const pokemonLeastSpecialAttackIndex = newState.myTeam.findIndex(
        (el) => el.id === pokemonLeastSpecialAttack.id
    );
    const pokemonMostSpecialAttackIndex = newState.myTeam.findIndex(
        (el) => el.id === pokemonMostSpecialAttack.id
    );

    myTeam[pokemonMostSpecialAttackIndex] = pokemonMostSpecialAttack;
    myTeam[pokemonLeastSpecialAttackIndex] = { ...pokemonLeastSpecialAttack, hp: 0 };

    return { ...state, myTeam };
}
