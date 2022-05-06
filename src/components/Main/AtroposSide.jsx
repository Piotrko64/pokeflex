import Atropos from "atropos/react";
import { examplePokemons } from "../../data/examplePokemons";
import CardPokemon from "../pokemon/CardPokemon";

function AtroposSide() {
    return (
        <Atropos className="atropos">
            <CardPokemon value={examplePokemons[0]} />
        </Atropos>
        // </AtroposCard>
    );
}

export default AtroposSide;
