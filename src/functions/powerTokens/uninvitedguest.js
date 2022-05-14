export default function uninvitedGuest(state) {
    const Meowth = {
        id: "44Meowth520221905",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
        name: "Meowth",
        type: "Normal",
        hp: 13,
        attack: 3,
        specialAttack: 7,
        speed: 4,
        defense: 1,
        revenge: 3,
    };
    console.log([...state.myTeam, { ...Meowth }]);
    return { ...state, myTeam: [...state.myTeam, { ...Meowth }] };
}
