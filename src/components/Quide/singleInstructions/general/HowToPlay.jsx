import React from "react";
import styled from "styled-components";

const Center = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1500px;
    margin: auto;
    padding: 10px;
`;

const HowToPlay = () => {
    return (
        <Center>
            <h1>How play?</h1>
            <p>
                Aby wygrać musisz pokonać wszystkie wrogie pokemony (górna część planszy). Pokemon zostaje
                pokonany i wykluczony z walki gdy jego hp osiągnie 0. Żeby zaatakować wystarczy że klikniesz
                swojego pokemona (dolna część planszy) a następnie wybierzesz przeciwnika. Jego zdrowie
                zostanie zmniejszone o ilość twojego ataku. Gra kończy się gdy jedna ze stron nie będzie miała
                pokemonów.
            </p>
        </Center>
    );
};

export default HowToPlay;
