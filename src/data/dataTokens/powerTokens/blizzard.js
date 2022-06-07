import clone from "lodash.clone";

const VALUE_SPEED = 6;
const VALUE_HP = 2;

export default function blizzard(state, AI) {
    const newState = clone(state);

    let thisTeam = !AI ? newState.enemyTeam : newState.myTeam;

    const newStateTeam = {
        [!AI ? "enemyTeam" : "myTeam"]: thisTeam.map((el) => ({
            ...el,
            speed: Math.max(0, el.speed - VALUE_SPEED),
            hp: el.hp - VALUE_HP,
        })),
    };

    return { ...state, ...newStateTeam };
}
