import clone from "lodash.clone";
import { StateFightInterface } from "../../../types/_Reducer/StateFight";

const MORE_SPEED = 10;
const MORE_SPECIAL_ATTACK = 2;

export default function sacrifice(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = clone(state);
    let thisTeam;
    thisTeam = AI ? newState.enemyTeam : newState.myTeam;
    const strongestSPThisTeamSort = [...thisTeam].sort((a, b) => b.specialAttack - a.specialAttack);
    const hpWeakestSpecialAttack = [...thisTeam].sort((a, b) => b.specialAttack - a.specialAttack)[
        thisTeam.length - 1
    ].hp;
    const idWeakestSpecialAttack = strongestSPThisTeamSort[thisTeam.length - 1].id;

    const newStateTeam = {
        [AI ? "enemyTeam" : "myTeam"]: thisTeam.map((el) => {
            if (el.id === strongestSPThisTeamSort[0].id)
                return {
                    ...el,
                    hp: el.hp + hpWeakestSpecialAttack,
                    speed: el.speed + MORE_SPEED,
                    specialAttack: el.specialAttack + MORE_SPECIAL_ATTACK,
                };
            if (el.id === idWeakestSpecialAttack)
                return {
                    ...el,
                    hp: el.hp - hpWeakestSpecialAttack,
                };
            return el;
        }),
    };

    return { ...state, ...newStateTeam };
}
