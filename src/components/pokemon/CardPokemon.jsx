import { examplePokemons } from "../../data/examplePokemons";
import Stats from "./Stats";
import styled from "styled-components";
const Card = styled.div`
    height: 100%;
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    flex-direction: column;
    box-shadow: 0px 0px 10px rgba(75, 1, 77, 0.98);
`;

function CardPokemon() {
    return (
        <Card>
            <img data-atropos-opacity="1" data-atropos-offset="10" src={examplePokemons[0].image} alt="" />

            <Stats value={examplePokemons[0]} />
        </Card>
    );
}

export default CardPokemon;
