import React from "react";
import styled from "styled-components";
import { examplePokemons } from "../../../../data/examplePokemons";
import CardPokemon from "../../../pokemon/CardPokemon";
const FlexWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const OneCard = styled.div`
    margin: 20px;
`;
function AllPokemonsGuide() {
    return (
        <FlexWrap>
            {examplePokemons.map((el) => (
                <OneCard>
                    <CardPokemon value={el} versionMini />
                </OneCard>
            ))}
        </FlexWrap>
    );
}

export default AllPokemonsGuide;
