import { Fragment, useEffect } from "react";
import { PokemonInterface } from "../../../../types/pokemonTokenData/PokemonInterface";

import { CardPokemon } from "../../../CardPokemon/CardPokemon";

function PokemonAward({ pokemon }: { pokemon: PokemonInterface }) {
    useEffect(() => {
        const checkAllTokensAward = JSON.parse(localStorage.getItem("pokemonsAward")!) || [];
        !checkAllTokensAward.length && localStorage.setItem("pokemonsAward", "[]");

        checkAllTokensAward.push(pokemon.idAward);

        localStorage.setItem("pokemonsAward", JSON.stringify([...new Set(checkAllTokensAward)]));
    }, []);
    return (
        <Fragment>
            <CardPokemon value={pokemon} versionMini />
        </Fragment>
    );
}
export default PokemonAward;
