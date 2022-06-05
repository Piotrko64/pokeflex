import Atropos from "atropos/react";

import { useEffect, useState } from "react";
import { examplePokemons } from "../../data/examplePokemons";
import CardPokemon from "../CardPokemon/CardPokemon";

function AtroposSide() {
    const [atroposPokemon, setAtroposPokemon] = useState(examplePokemons[0]);
    useEffect(() => {
        console.log("o");
        setAtroposPokemon(examplePokemons[Math.round(Math.random() * (examplePokemons.length - 1))]);
        return () => {
            console.log("u");
            setAtroposPokemon(false);
        };
    }, []);

    return (
        <Atropos className="atropos">
            <CardPokemon value={atroposPokemon} />
        </Atropos>
    );
}

export default AtroposSide;
