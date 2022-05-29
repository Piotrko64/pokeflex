import Atropos from "atropos/react";
import { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { examplePokemons } from "../../data/examplePokemons";
import CardPokemon from "../pokemon/CardPokemon";

function AtroposSide() {
    const [atroposPokemon, setAtroposPokemon] = useState(examplePokemons[0]);
    useLayoutEffect(() => {
        setAtroposPokemon(examplePokemons[Math.round(Math.random() * 8)]);
    }, []);
    return (
        <Atropos className="atropos">
            <CardPokemon value={atroposPokemon} />
        </Atropos>
    );
}

export default AtroposSide;
