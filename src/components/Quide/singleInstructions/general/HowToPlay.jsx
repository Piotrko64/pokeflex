import React from "react";
import styled from "styled-components";

const Center = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 10px auto;
    padding: 10px;
    flex-direction: column;
`;

const HowToPlay = () => {
    return (
        <Center>
            <h1>How play?</h1>
            <p>
                To win you must defeat all enemy Pokémon (top of the board). Pokémon are defeated and
                eliminated from the battle when its HP reaches 0. To attack, simply click your Pokémon (bottom
                part of the board) and then select an opponent. Their health will be reduced by the amount of
                your attack. The game ends when one of the sides has no Pokémon.
            </p>
        </Center>
    );
};

export default HowToPlay;
