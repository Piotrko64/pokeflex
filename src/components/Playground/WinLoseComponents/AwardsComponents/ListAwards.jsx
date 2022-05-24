import styled from "styled-components";
import Confetti from "react-confetti";
import { Fragment, useEffect } from "react";

import TokenAwards from "./TokenAwards";
import PokemonAward from "./PokemonAward";

function ListAwards({ token, pokemon }) {
    return (
        <Fragment>
            {token && <TokenAwards token={token} />}
            {pokemon && <PokemonAward pokemon={pokemon} />}
        </Fragment>
    );
}
export default ListAwards;
