import Atropos from "atropos/react";
import styled from "styled-components";
import Stats from "../pokemon/Stats";
import { examplePokemons } from "../../data/examplePokemons";
import CardPokemon from "../pokemon/CardPokemon";

function AtroposSide() {
    return (
        <Atropos className="atropos">
            <CardPokemon />
        </Atropos>
        // </AtroposCard>
    );
}

export default AtroposSide;
