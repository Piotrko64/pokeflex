const VALUE_DAMAGE = 6;

export default function conflagration(state, AI) {
    const newState = JSON.parse(JSON.stringify(state));
    let newStateEnemyTeam = AI
        ? newState.myTeam.map((el) => ({ ...el, hp: el.hp - VALUE_DAMAGE }))
        : newState.enemyTeam.map((el) => ({ ...el, hp: el.hp - VALUE_DAMAGE }));
    console.log({ ...state, enemyTeam: newStateEnemyTeam });
    if (!AI) {
        return { ...state, enemyTeam: newStateEnemyTeam };
    }
    return { ...state, myTeam: newStateEnemyTeam };
}
