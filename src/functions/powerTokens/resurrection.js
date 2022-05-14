const NEW_HP = 11;

export default function resurrection(state) {
    const newState = JSON.parse(JSON.stringify(state));
    const newStateMyTeam = [...newState.myTeam];
    const { grave } = state;
    if (grave.length) {
        const pokemonFromGrave = { ...grave[0], hp: NEW_HP };
        return { ...state, myTeam: [...newStateMyTeam, pokemonFromGrave] };
    }

    return { ...state };
}
