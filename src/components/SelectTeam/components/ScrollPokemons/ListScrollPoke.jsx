import { render } from "react-dom";
import styled from "styled-components";
import { examplePokemons } from "../../../../data/examplePokemons";
import OnePokemonScroll from "./OnePokemonScroll";

const ScrollList = styled.div`
    display: flex;
    padding: 20px;
    max-width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
`;
function handleMouseDown(e) {
    console.log(new Date(), e);
}
export default function ListScrollPoke() {
    return (
        <ScrollList onMouseDown={handleMouseDown}>
            {examplePokemons.map((el) => (
                <OnePokemonScroll key={el} value={el} />
            ))}
        </ScrollList>
    );
}
