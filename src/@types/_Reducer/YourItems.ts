import { ArrayTokenInterface } from "../pokemonTokenData/TokenInterface";
import { ArrayPokemonInterface } from "../pokemonTokenData/PokemonInterface";
export interface YourItemsInterface {
    pokemons: ArrayPokemonInterface;
    tokens: ArrayTokenInterface;
    teamFight: ArrayPokemonInterface;
    tokensFight: ArrayTokenInterface;
}
