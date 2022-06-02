import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 5px;
    font-family: "Koulen", cursive;
    font-size: 1.5rem;
    border-radius: 10px;
    border: none;
    min-width: 100px;
    text-align: center;
    color: white;
    background: ${(props) => props.color};
    margin: 0 10px;
    cursor: pointer;
`;

const ListButtons = [
    {
        text: "Levels",
        pathTo: "/ChooseLevel",
        color: "rgba(209, 37, 37, 1)",
    },
    {
        text: "Home",
        pathTo: "/",
        color: "#8e00c4",
    },
];

const ButtonsNavigate = () => {
    return (
        <Content>
            {ListButtons.map((el) => (
                <Link to={el.pathTo}>
                    <Button color={el.color}>{el.text}</Button>
                </Link>
            ))}
        </Content>
    );
};

export default ButtonsNavigate;