import { render } from "react-dom";
import styled from "styled-components";
import ListScrollPoke from "./ListScrollPoke";
const ScrollEntireDiv = styled.div``;
const TextScroll = styled.div``;
const Scroll = styled.div``;
function MainComponentScrollPokemons() {
    return (
        <ScrollEntireDiv>
            <TextScroll>Select Pokemons</TextScroll>
            <ListScrollPoke />
        </ScrollEntireDiv>
    );
}
export default MainComponentScrollPokemons;
