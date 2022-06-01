import styled from "styled-components";
import Confetti from "react-confetti";
import { Fragment, useEffect } from "react";
import Tippy from "@tippyjs/react";
import Tooltip from "../../../Tooltip/tooltip";
import TooltipCard from "../../../Tooltip/tooltipCard";
import CardPokemon from "../../../pokemon/CardPokemon";

const PokemonImageAward = styled.img`
    width: 200px;
`;

function PokemonAward({ pokemon }) {
    useEffect(() => {
        const checkAllTokensAward = JSON.parse(localStorage.getItem("pokemonsAward")) || [];
        !checkAllTokensAward.length && localStorage.setItem("pokemonsAward", "[]");

        checkAllTokensAward.push(pokemon.idAward);

        console.log(checkAllTokensAward);
        localStorage.setItem("pokemons", JSON.stringify([...new Set(checkAllTokensAward)]));
    }, []);
    return (
        <Fragment>
            <CardPokemon value={pokemon} versionMini />
        </Fragment>
    );
}
export default PokemonAward;
