import { Fragment } from "react";

import TokenAwards from "./TokenAwards";
import PokemonAward from "./PokemonAward";
import { oneTokenInterface } from "../../../../types/pokemonTokenData/tokenInterface";
import { pokemonInterface } from "../../../../types/pokemonTokenData/pokemonInterface";

function ListAwards({ token, pokemon }: { token: oneTokenInterface; pokemon: pokemonInterface }) {
    return (
        <Fragment>
            {token && <TokenAwards token={token} />}
            {pokemon && <PokemonAward pokemon={pokemon} />}
        </Fragment>
    );
}
export default ListAwards;
