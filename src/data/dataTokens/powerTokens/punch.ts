import { arrayPokemonInterface } from "./../../../types/pokemonTokenData/pokemonInterface";
import clone from "lodash.clone";
import { stateFightInterface } from "../../../types/_Reducer/stateFight";

const VALUE_PUNCH = 14;

export default function punch(state: stateFightInterface, AI: boolean): stateFightInterface {
    const newState = clone(state);
    let thisTeam: arrayPokemonInterface;
    thisTeam = !AI ? newState.enemyTeam : newState.myTeam;
    const lengthTeamMinusOne: number = thisTeam.length - 1;
    const randomThisTeam = Math.round(Math.random() * lengthTeamMinusOne);
    const newStateTeam = {
        [!AI ? "enemyTeam" : "myTeam"]: thisTeam.map((el, i) =>
            i === randomThisTeam
                ? {
                      ...el,
                      hp: el.hp - VALUE_PUNCH,
                  }
                : el
        ),
    };

    return { ...state, ...newStateTeam };
}
