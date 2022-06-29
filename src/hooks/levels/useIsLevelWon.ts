import { awardsType } from "./../../types/levels/levelInterface";
import { oneTokenInterface } from "./../../types/pokemonTokenData/tokenInterface";
import { pokemonInterface } from "./../../types/pokemonTokenData/pokemonInterface";
import { useSelectorYourItems } from "../../_Reducer/selectors/useSelectorYourItems";

export const useIsLevelWon = (award: awardsType) => {
    const { pokemons, tokens } = award;
    const allPokemons = useSelectorYourItems().pokemons;
    const allPokemonsIdAward = allPokemons.map((el: pokemonInterface) => el.idAward).filter(Boolean);
    const allTokens = useSelectorYourItems().tokens;
    const allTokensIdAward = allTokens.map((el: oneTokenInterface) => el.idAward).filter(Boolean);

    const isPokemonAward: boolean = allPokemonsIdAward.some((el) => el === pokemons?.idAward);
    const isTokensAward = allTokensIdAward?.some((el) => el === tokens?.idAward);
    if (isPokemonAward || isTokensAward) return true;
};
