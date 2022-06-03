import { Fragment, useEffect } from "react";

import CardPokemon from "../../../pokemon/CardPokemon";

function PokemonAward({ pokemon }) {
    useEffect(() => {
        const checkAllTokensAward = JSON.parse(localStorage.getItem("pokemonsAward")) || [];
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
