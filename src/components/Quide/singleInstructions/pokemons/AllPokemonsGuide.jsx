import Atropos from "atropos";
import React from "react";
import styled from "styled-components";
import { examplePokemons } from "../../../../data/examplePokemons";
import CardPokemon from "../../../CardPokemon/CardPokemon";
const FlexWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 90%;
    margin: auto;
`;
const OneCard = styled.div`
    margin: 20px;
`;
function AllPokemonsGuide() {
    return (
        <FlexWrap>
            {examplePokemons.map((el) => (
                <OneCard key={el.id}>
                    <CardPokemon value={el} versionMini />
                </OneCard>
            ))}
        </FlexWrap>
    );
}

export default AllPokemonsGuide;
