import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    const pokemonsTeamSelect = useSelector((state) => state.YourItemsReducer.teamFight);
    const tokensTeamSelect = useSelector((state) => state.YourItemsReducer.tokensFight);
    function saveInLocalStorage() {
        if (!pokemonsTeamSelect.length) {
            return;
        }
        localStorage.setItem("tokens", JSON.stringify(tokensTeamSelect));
        localStorage.setItem("pokemons", JSON.stringify(pokemonsTeamSelect));
        navigate("/");
    }
    return (
        <Flex>
            <Button onClick={() => saveInLocalStorage()}>
                {pokemonsTeamSelect.length ? "Save and back to home" : "Please select Pokemons!"}
            </Button>
        </Flex>
    );
};

export default ButtonsComponent;
