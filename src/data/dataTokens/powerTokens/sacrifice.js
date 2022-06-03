const MORE_SPEED = 10;
const MORE_SPECIAL_ATTACK = 2;

export default function sacrifice(state, AI) {
    const newState = JSON.parse(JSON.stringify(state));
    if (AI) {
        const newStateMyTeam = [...newState.enemyTeam];

        let sortPokemonsSpecialAttack = [...newStateMyTeam].sort((a, b) => {
            return b.specialAttack - a.specialAttack;
        });
        const pokemonLeastSpecialAttack = sortPokemonsSpecialAttack[newStateMyTeam.length - 1];
        const pokemonMostSpecialAttack = {
            ...sortPokemonsSpecialAttack[0],
            speed: sortPokemonsSpecialAttack[0].speed + MORE_SPEED,
            hp: sortPokemonsSpecialAttack[0].hp + pokemonLeastSpecialAttack.hp,
            specialAttack: (sortPokemonsSpecialAttack[0].specialAttack += MORE_SPECIAL_ATTACK),
        };

        let enemyTeam = newStateMyTeam;
        const pokemonLeastSpecialAttackIndex = newState.enemyTeam.findIndex(
            (el) => el.id === pokemonLeastSpecialAttack.id
        );
        const pokemonMostSpecialAttackIndex = newState.enemyTeam.findIndex(
            (el) => el.id === pokemonMostSpecialAttack.id
        );

        enemyTeam[pokemonMostSpecialAttackIndex] = pokemonMostSpecialAttack;
        enemyTeam[pokemonLeastSpecialAttackIndex] = { ...pokemonLeastSpecialAttack, hp: 0 };

        return { ...state, enemyTeam };
    }
    const newStateMyTeam = [...newState.myTeam];

    let sortPokemonsSpecialAttack = [...newStateMyTeam].sort((a, b) => {
        return b.specialAttack - a.specialAttack;
    });
    const pokemonLeastSpecialAttack = sortPokemonsSpecialAttack[newStateMyTeam.length - 1];
    const pokemonMostSpecialAttack = {
        ...sortPokemonsSpecialAttack[0],
        speed: sortPokemonsSpecialAttack[0].speed + MORE_SPEED,
        hp: sortPokemonsSpecialAttack[0].hp + pokemonLeastSpecialAttack.hp,
        specialAttack: (sortPokemonsSpecialAttack[0].specialAttack += MORE_SPECIAL_ATTACK),
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
