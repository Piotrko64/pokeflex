import React from "react";
import pokemonImg from "../../../../media/guideMedia/pokemonStats.png";
import styled from "styled-components";
import StatsInGeneralGuide from "./stats/StatsInGeneralGuide";
import HowToPlay from "./HowToPlay";
import GeneralTypes from "./GeneralTypes";
const General = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 50px;
`;
const PokemonImgGuide = styled.img`
    height: 350px;
    margin: auto;
`;

function GeneralGuide() {
    return (
        <General>
            <PokemonImgGuide src={pokemonImg} alt="" />
            <HowToPlay />
            <StatsInGeneralGuide />
            <GeneralTypes />
        </General>
    );
}

export default GeneralGuide;
