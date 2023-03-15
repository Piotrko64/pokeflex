import Atropos from "atropos/react";
import { useEffect, useState } from "react";
import { examplePokemons } from "../../data/examplePokemons";
import { PokemonInterface } from "../../@types/pokemonTokenData/PokemonInterface";
import { CardPokemon } from "../CardPokemon/CardPokemon";

export function AtroposSide() {
    const [atroposPokemon, setAtroposPokemon] = useState<false | PokemonInterface>(examplePokemons[0]);
    useEffect(() => {
        setAtroposPokemon(examplePokemons[Math.round(Math.random() * (examplePokemons.length - 1))]);
        return () => {
            setAtroposPokemon(false);
        };
    }, []);

    return <Atropos className="atropos">{atroposPokemon && <CardPokemon value={atroposPokemon} />}</Atropos>;
}
