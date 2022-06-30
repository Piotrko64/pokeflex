import { ArrayTokenInterface, OneTokenInterface } from "../pokemonTokenData/TokenInterface";

import { ArrayPokemonInterface, PokemonInterface } from "../pokemonTokenData/PokemonInterface";
export interface LevelInterface {
    id: string;
    name: string;
    color: string;
    enemyTeam: ArrayPokemonInterface;
    enemyTokens: ArrayTokenInterface;
    award: AwardsType;
    music?: HTMLAudioElement;
}
export type AwardsType = {
    tokens?: OneTokenInterface;
    pokemons?: PokemonInterface;
};
export type ArrayLevelInterface = Array<LevelInterface>;
