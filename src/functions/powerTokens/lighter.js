export default function lighter(state) {
    const newState = state.myTeam.map((el) => ({ ...el, type: "Fire" }));

    return { ...state, myTeam: newState };
}
