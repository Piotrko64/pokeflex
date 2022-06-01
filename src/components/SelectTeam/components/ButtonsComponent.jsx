import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Button = styled.button`
    padding: 10px;
`;
const ButtonsComponent = () => {
    const PokemonsTeamSelect = useSelector((state) => state.YourItemsReducer.TeamFight);
    const TokensTeamSelect = useSelector((state) => state.YourItemsReducer.TokensFight);
    function saveInLocalStorage() {
        localStorage.setItem("tokens", JSON.stringify(TokensTeamSelect));
        localStorage.setItem("pokemons", JSON.stringify(PokemonsTeamSelect));
    }
    return (
        <>
            <Button onClick={() => saveInLocalStorage()}> Save </Button>
            <Button> Back </Button>
        </>
    );
};

export default ButtonsComponent;
