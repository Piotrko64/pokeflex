import { render } from "react-dom";
import styled from "styled-components";
import { examplePokemons } from "../../../../data/examplePokemons";
import CardPokemon from "../../../pokemon/CardPokemon";

const Card = styled.div`
    margin: 0 90px;
`;

export default function OnePokemonScroll({ value }) {
    return (
        <Card>
            <CardPokemon value={value} versionMini />
        </Card>
    );
}
