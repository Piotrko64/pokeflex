import Atropos from "atropos/react";

import { useEffect, useState } from "react";
import { examplePokemons } from "../../data/examplePokemons";
import { pokemonInterface } from "../../types/pokemonTokenData/pokemonInterface";
import CardPokemon from "../CardPokemon/CardPokemon";

function AtroposSide() {
    const [atroposPokemon, setAtroposPokemon] = useState<false | pokemonInterface>(examplePokemons[0]);
    useEffect(() => {
        setAtroposPokemon(examplePokemons[Math.round(Math.random() * (examplePokemons.length - 1))]);
        return () => {
            setAtroposPokemon(false);
        };
    }, []);

    return <Atropos className="atropos">{atroposPokemon && <CardPokemon value={atroposPokemon} />}</Atropos>;
}

export default AtroposSide;