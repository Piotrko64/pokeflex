import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PokemonInterface } from "../../../../@types/pokemonTokenData/PokemonInterface";
import { addItemsFromLocalStorage } from "../../../../_Reducer/YourItems";
import { CardPokemon } from "../../../CardPokemon/CardPokemon";

function PokemonAward({ pokemon }: { pokemon: PokemonInterface }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAllTokensAward = JSON.parse(localStorage.getItem("pokemonsAward")!) || [];
        !checkAllTokensAward.length && localStorage.setItem("pokemonsAward", "[]");

        checkAllTokensAward.push(pokemon.idAward);

        localStorage.setItem("pokemonsAward", JSON.stringify([...new Set(checkAllTokensAward)]));
        dispatch(addItemsFromLocalStorage());
    }, []);
    return <CardPokemon value={pokemon} versionMini />;
}
export default PokemonAward;
