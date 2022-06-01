import { render } from "react-dom";
import styled from "styled-components";
import ListScrollTokens from "../ScrollTokens/ListScrollTokens";
import TitleScroll from "../TitleScroll";
import ListScrollPoke from "./ListScrollPoke";

function MainComponentScrollPokemons() {
    return (
        <>
            <TitleScroll title="Your Pokemons" />
            <ListScrollPoke />
        </>
    );
}
export default MainComponentScrollPokemons;
