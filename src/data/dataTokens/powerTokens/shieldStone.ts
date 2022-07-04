import { StateFightInterface } from "../../../@types/_Reducer/StateFight";
import clone from "lodash.clone";

const VALUE_HP = 10;
const VALUE_DEFENSE = 1;

export default function shieldStone(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = clone(state);

    let thisTeam = AI ? newState.enemyTeam : newState.myTeam;
    const strongerPokemonID = [...thisTeam].sort((a, b) => b.hp - a.hp)[0].id;

    const newStateTeam = {
        [AI ? "enemyTeam" : "myTeam"]: thisTeam.map((el) =>
            el.id === strongerPokemonID
                ? {
                      ...el,

                      defense: el.defense + VALUE_DEFENSE,
                      hp: el.hp + VALUE_HP,
                  }
                : el
        ),
    };

    return { ...state, ...newStateTeam };
}
