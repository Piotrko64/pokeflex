import clone from "lodash.clone";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

const VALUE_HP = 9;
const VALUE_DEFENSE = 1;

export default function charging(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = clone(state);

    const thisTeam = AI ? newState.enemyTeam : newState.myTeam;
    const strongerElectroPokemonID = [...thisTeam]
        .filter(({ type }) => type === "Electro")
        .sort((a, b) => b.hp - a.hp)[0]?.id;

    if (!strongerElectroPokemonID) return state;

    const newStateTeam = {
        [AI ? "enemyTeam" : "myTeam"]: thisTeam.map((el) =>
            el.id === strongerElectroPokemonID
                ? {
                      ...el,
                      type: "Turbo Electro",
                      defense: el.defense + VALUE_DEFENSE,
                      hp: el.hp + VALUE_HP,
                  }
                : el
        ),
    };

    return { ...state, ...newStateTeam };
}
