import { arrayTokenInterface, oneTokenInterface } from "./../pokemonTokenData/tokenInterface";
import { arrayPokemonInterface } from "./../pokemonTokenData/pokemonInterface";
import { pokemonInterface } from "../pokemonTokenData/pokemonInterface";
export interface levelInterface {
    id: string;
    name: string;
    color: string;
    enemyTeam: any;
    enemyTokens: any;
    award: awardsType;
    music?: HTMLAudioElement;
}
export type awardsType = {
    tokens?: any;
    pokemons?: any;
};
export type arrayLevelInterface = Array<levelInterface>;
