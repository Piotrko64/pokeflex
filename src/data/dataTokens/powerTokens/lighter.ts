import { arrayTokenInterface } from "./../../../types/pokemonTokenData/tokenInterface";
import { arrayPokemonInterface } from "./../../../types/pokemonTokenData/pokemonInterface";
import { allTokens } from "../allTokens";
import clone from "lodash.clone";
import { stateFightInterface } from "../../../types/_Reducer/stateFight";

type objectTeam =
    | { enemyTeam: arrayPokemonInterface }
    | { myTeam: arrayPokemonInterface }
    | arrayPokemonInterface;
type objectToken =
    | { enemyTokens: arrayTokenInterface }
    | { myTokens: arrayTokenInterface }
    | arrayTokenInterface;

export default function lighter(state: stateFightInterface, AI: boolean): stateFightInterface {
    const conflagration = allTokens.find((el) => el.name === "Conflagration")!;
    const newState = clone(state);
    let newStateTeam: objectTeam = AI
        ? newState.enemyTeam.map((el) => ({ ...el, type: "Turbo Fire" }))
        : newState.myTeam.map((el) => ({ ...el, type: "Turbo Fire" }));

    let newStateTokens: objectToken = AI
        ? [...newState.enemyTokens, conflagration]
        : [...newState.myTokens, conflagration];

    newStateTeam = AI ? { enemyTeam: newStateTeam } : { myTeam: newStateTeam };
    newStateTokens = AI ? { enemyTokens: newStateTokens } : { myTokens: newStateTokens };

    const stateToReturn = { ...state, ...newStateTeam, ...newStateTokens };

    return stateToReturn;
}
