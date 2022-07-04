import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

const VALUE_DAMAGE = 6;

export default function conflagration(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState: StateFightInterface = JSON.parse(JSON.stringify(state));
    let newStateEnemyTeam = AI
        ? newState.myTeam.map((el) => ({ ...el, hp: el.hp - VALUE_DAMAGE }))
        : newState.enemyTeam.map((el) => ({ ...el, hp: el.hp - VALUE_DAMAGE }));

    if (!AI) {
        return { ...state, enemyTeam: newStateEnemyTeam };
    }
    return { ...state, myTeam: newStateEnemyTeam };
}
