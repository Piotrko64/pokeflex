import { stateFightInterface } from "../../../types/_Reducer/stateFight";

const VALUE_DAMAGE = 6;

export default function conflagration(state: stateFightInterface, AI: boolean): stateFightInterface {
    const newState: stateFightInterface = JSON.parse(JSON.stringify(state));
    let newStateEnemyTeam = AI
        ? newState.myTeam.map((el) => ({ ...el, hp: el.hp - VALUE_DAMAGE }))
        : newState.enemyTeam.map((el) => ({ ...el, hp: el.hp - VALUE_DAMAGE }));

    if (!AI) {
        return { ...state, enemyTeam: newStateEnemyTeam };
    }
    return { ...state, myTeam: newStateEnemyTeam };
}
