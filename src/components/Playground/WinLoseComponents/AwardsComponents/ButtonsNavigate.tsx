import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ListButtons } from "./ListNavigateButtons";

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 5px 10px;
    font-family: "Koulen", cursive;
    font-size: 1.5rem;
    border-radius: 10px;
    border: none;
    height: min-height;
    width: clamp(140px, 12vw, 220px);
    text-align: center;
    color: white;
    background: ${(props) => props.color};
    margin: 10px 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

export const ButtonsNavigate = () => {
    const navigate = useNavigate();

    return (
        <Content>
            {ListButtons.map((el) => (
                <Link key={el.pathTo} to={el.pathTo} className="flex">
                    <Button color={el.color}>{el.text}</Button>
                </Link>
            ))}
            <Button color="#e76700" onClick={() => navigate(0)}>
                Play Again
            </Button>
        </Content>
    );
};
