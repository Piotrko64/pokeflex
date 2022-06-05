import React from "react";
import pokemonImg from "../../../../media/guideMedia/pokemonStats.png";
import styled from "styled-components";
const General = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const PokemonImgGuide = styled.img`
    height: 350px;
    margin: auto;
`;

function GeneralGuide() {
    return (
        <General>
            <PokemonImgGuide src={pokemonImg} alt="" />
        </General>
    );
}

export default GeneralGuide;
