import { ArrayTokenInterface } from "../../../types/pokemonTokenData/TokenInterface";
import { ArrayPokemonInterface } from "../../../types/pokemonTokenData/PokemonInterface";
import { allTokens } from "../allTokens";
import clone from "lodash.clone";
import { StateFightInterface } from "../../../types/_Reducer/StateFight";

type objectTeam =
    | { enemyTeam: ArrayPokemonInterface }
    | { myTeam: ArrayPokemonInterface }
    | ArrayPokemonInterface;
type objectToken =
    | { enemyTokens: ArrayTokenInterface }
    | { myTokens: ArrayTokenInterface }
    | ArrayTokenInterface;

export default function lighter(state: StateFightInterface, AI: boolean): StateFightInterface {
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

    return { ...state, ...newStateTeam, ...newStateTokens };
}
