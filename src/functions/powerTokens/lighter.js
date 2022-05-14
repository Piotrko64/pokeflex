export default function lighter(state, AI) {
    let newState = AI
        ? state.enemyTeam.map((el) => ({ ...el, type: "Turbo Fire", speed: el.speed + 5 }))
        : state.myTeam.map((el) => ({ ...el, type: "Turbo Fire", speed: el.speed + 5 }));
    newState = AI ? { enemyTeam: newState } : { myTeam: newState };
    return { ...state, ...newState };
}
