import { Fragment } from "react";

import TokenAwards from "./TokenAwards";
import PokemonAward from "./PokemonAward";
import { OneTokenInterface } from "../../../../types/pokemonTokenData/TokenInterface";
import { PokemonInterface } from "../../../../types/pokemonTokenData/PokemonInterface";

function ListAwards({ token, pokemon }: { token: OneTokenInterface; pokemon: PokemonInterface }) {
    return (
        <Fragment>
            {token && <TokenAwards token={token} />}
            {pokemon && <PokemonAward pokemon={pokemon} />}
        </Fragment>
    );
}
export default ListAwards;
