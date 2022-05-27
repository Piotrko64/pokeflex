import { render } from "react-dom";
import styled from "styled-components";
import ListScrollTokens from "../ScrollTokens/ListScrollTokens";
import ListScrollPoke from "./ListScrollPoke";
const ScrollEntireDiv = styled.div``;
const TextScroll = styled.div``;
const Scroll = styled.div``;
function MainComponentScrollPokemons() {
    return (
        <ScrollEntireDiv>
            <TextScroll>Select Pokemons</TextScroll>
            <ListScrollPoke />
            <ListScrollTokens />
        </ScrollEntireDiv>
    );
}
export default MainComponentScrollPokemons;
