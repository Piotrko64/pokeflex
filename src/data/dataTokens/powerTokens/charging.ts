import clone from "lodash.clone";
import { stateFightInterface } from "../../../types/_Reducer/stateFight";

const VALUE_HP = 9;
const VALUE_DEFENSE = 1;

export default function charging(state: stateFightInterface, AI: boolean): stateFightInterface {
    const newState = clone(state);

    let thisTeam = AI ? newState.enemyTeam : newState.myTeam;
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
