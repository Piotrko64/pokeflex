import { arrayTokenInterface, oneTokenInterface } from "./../pokemonTokenData/tokenInterface";

import { arrayPokemonInterface, pokemonInterface } from "../pokemonTokenData/pokemonInterface";
export interface levelInterface {
    id: string;
    name: string;
    color: string;
    enemyTeam: arrayPokemonInterface;
    enemyTokens: arrayTokenInterface;
    award: awardsType;
    music?: HTMLAudioElement;
}
export type awardsType = {
    tokens?: oneTokenInterface;
    pokemons?: pokemonInterface;
};
export type arrayLevelInterface = Array<levelInterface>;
