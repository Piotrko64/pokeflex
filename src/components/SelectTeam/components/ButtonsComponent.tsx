import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelectorYourItems } from "../../../_Reducer/selectors/useSelectorYourItems";

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
    const navigate = useNavigate();
    const { teamFight, tokensFight } = useSelectorYourItems();

    function saveInLocalStorage() {
        if (!teamFight.length) {
            return;
        }
        localStorage.setItem("tokens", JSON.stringify(tokensFight));
        localStorage.setItem("pokemons", JSON.stringify(teamFight));
        navigate("/");
    }
    return (
        <Flex>
            <Button onClick={() => saveInLocalStorage()}>
                {teamFight.length ? "Save and back to home" : "Please select Pokemons!"}
            </Button>
        </Flex>
    );
};

export default ButtonsComponent;
