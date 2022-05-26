export default function conflagration(state, AI) {
    const newState = JSON.parse(JSON.stringify(state));
    let newStateEnemyTeam = AI
        ? newState.myTeam.map((el) => ({ ...el, hp: el.hp - 7 }))
        : newState.enemyTeam.map((el) => ({ ...el, hp: el.hp - 7 }));
    console.log({ ...state, enemyTeam: newStateEnemyTeam });
    if (!AI) {
        return { ...state, enemyTeam: newStateEnemyTeam };
    }
    return { ...state, myTeam: newStateEnemyTeam };
}
