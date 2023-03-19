import { ArrayPokemonInterface } from "../../../@types/pokemonTokenData/PokemonInterface";
import clone from "lodash.clone";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

const VALUE_PUNCH = 14;

export default function punch(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = clone(state);
    const thisTeam: ArrayPokemonInterface = AI ? newState.myTeam : newState.enemyTeam;
    const lengthTeamMinusOne: number = thisTeam.length - 1;
    const randomThisTeam = Math.round(Math.random() * lengthTeamMinusOne);
    const newStateTeam = {
        [AI ? "myTeam" : "enemyTeam"]: thisTeam.map((el, i) =>
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
