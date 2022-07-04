import { AwardsType } from "../../@types/levels/LevelInterface";
import { OneTokenInterface } from "../../@types/pokemonTokenData/TokenInterface";
import { PokemonInterface } from "../../@types/pokemonTokenData/PokemonInterface";
import { useSelectorYourItems } from "../../_Reducer/selectors/useSelectorYourItems";

export const useIsLevelWon = (award: AwardsType) => {
    const { pokemons, tokens } = award;
    const allPokemons = useSelectorYourItems().pokemons;
    const allPokemonsIdAward = allPokemons.map((el: PokemonInterface) => el.idAward).filter(Boolean);
    const allTokens = useSelectorYourItems().tokens;
    const allTokensIdAward = allTokens.map((el: OneTokenInterface) => el.idAward).filter(Boolean);

    const isPokemonAward: boolean = allPokemonsIdAward.some((el) => el === pokemons?.idAward);
    const isTokensAward = allTokensIdAward?.some((el) => el === tokens?.idAward);
    if (isPokemonAward || isTokensAward) return true;
};
