import { render } from "react-dom";
import styled from "styled-components";
const ScrollEntireDiv = styled.div``;
const TextScroll = styled.div``;
const Scroll = styled.div``;
export default function MainComponentScrollPokemons() {
    render(
        <ScrollEntireDiv>
            <TextScroll>Select Pokemons</TextScroll>
            <Scroll></Scroll>
        </ScrollEntireDiv>
    );
}
