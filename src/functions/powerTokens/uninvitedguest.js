export default function uninvitedGuest(state) {
    const Meowth = {
        id: "44Meowth520221905",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
        name: "Meowth",
        type: "Normal",
        hp: 12,
        attack: 3,
        specialAttack: 6,
        speed: 4,
        defense: 1,
        revenge: 3,
    };

    return { ...state, myTeam: [...state.myTeam, { ...Meowth }] };
}
