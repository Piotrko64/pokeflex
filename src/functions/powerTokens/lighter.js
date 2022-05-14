export default function lighter(state) {
    const newState = state.myTeam.map((el) => ({ ...el, type: "Turbo Fire", speed: el.speed + 5 }));

    return { ...state, myTeam: newState };
}
