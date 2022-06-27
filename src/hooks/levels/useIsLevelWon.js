import { useSelector } from "react-redux";

const useIsLevelWon = (award) => {
    const { pokemons, tokens } = award;

    const arrayPokemonsIdAward = useSelector((state) => state.YourItemsReducer.pokemons)
        .map((el) => el.idAward)
        .filter(Boolean);

    const arrayTokensIdAward = useSelector((state) => state.YourItemsReducer.tokens)
        .map((el) => el.idAward)
        .filter(Boolean);

    const isPokemonAward = arrayPokemonsIdAward?.some((el) => el === pokemons?.idAward);
    const isTokensAward = arrayTokensIdAward?.some((el) => el === tokens?.idAward);
    if (isPokemonAward || isTokensAward) return true;
};

export default useIsLevelWon;
