import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import ReadyPokemon from "./ReadyPokemon";
import { whereIAm } from "../../_Actions/mainAction";

const ForCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 240px);
    grid-template-rows: repeat(2, 380px);
    grid-template-areas:
        "a b"
        "c b";
    max-width: 750px;
    place-items: center;
`;

function GroundForCards({ pokemons }) {
    return (
        <>
            <ForCards>
                {pokemons.map((el, i) => (
                    <ReadyPokemon value={el} key={el.id} />
                ))}
            </ForCards>
        </>
    );
}
export default GroundForCards;
