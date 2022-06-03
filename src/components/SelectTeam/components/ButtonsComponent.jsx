import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    background: red;
    border: none;
    color: white;
    font-family: "Koulen", cursive;
    font-size: 1.5rem;
    margin: 0 20px 10px;
    cursor: pointer;
    min-width: 100px;
`;
const ButtonsComponent = () => {
    let navigate = useNavigate();
    const PokemonsTeamSelect = useSelector((state) => state.YourItemsReducer.TeamFight);
    const TokensTeamSelect = useSelector((state) => state.YourItemsReducer.TokensFight);
    function saveInLocalStorage() {
        localStorage.setItem("tokens", JSON.stringify(TokensTeamSelect));
        localStorage.setItem("pokemons", JSON.stringify(PokemonsTeamSelect));
        navigate(-1);
    }
    return (
        <Flex>
            <Button onClick={() => saveInLocalStorage()}> Save and back </Button>

            <Link to="/">
                <Button> Back to home </Button>
            </Link>
        </Flex>
    );
};

export default ButtonsComponent;
