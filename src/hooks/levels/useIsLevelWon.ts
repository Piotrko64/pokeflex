import { awardsType } from "./../../types/levels/levelInterface";
import { oneTokenInterface } from "./../../types/pokemonTokenData/tokenInterface";
import { pokemonInterface } from "./../../types/pokemonTokenData/pokemonInterface";
import UseSelectorYourItems from "../../_Reducer/selectors/useSelectorYourItems";

export const useIsLevelWon = (award: awardsType) => {
    const { pokemons, tokens } = award;
    const allPokemons = UseSelectorYourItems().pokemons;
    const allPokemonsIdAward = allPokemons.map((el: pokemonInterface) => el.idAward).filter(Boolean);
    const allTokens = UseSelectorYourItems().tokens;
    const allTokensIdAward = allTokens.map((el: oneTokenInterface) => el.idAward).filter(Boolean);

    const isPokemonAward: boolean = allPokemonsIdAward.some((el) => el === pokemons?.idAward);
    const isTokensAward = allTokensIdAward?.some((el) => el === tokens?.idAward);
    if (isPokemonAward || isTokensAward) return true;
};
