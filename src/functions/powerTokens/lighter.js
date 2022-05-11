export default function lighter(state) {
    const newState = state.myTeam.map((el) => ({ ...el, type: "Fire" }));
    console.log(newState);
    return { ...state, myTeam: newState };
}
