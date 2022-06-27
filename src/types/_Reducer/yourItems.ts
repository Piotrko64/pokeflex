import { arrayTokenInterface } from "./../pokemonTokenData/tokenInterface";
import { arrayPokemonInterface } from "./../pokemonTokenData/pokemonInterface";
export interface yourItemsInterface {
    pokemons: arrayPokemonInterface;
    tokens: arrayTokenInterface;
    teamFight: arrayPokemonInterface;
    tokensFight: arrayTokenInterface;
}
