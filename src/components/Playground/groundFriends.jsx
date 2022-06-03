import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import ReadyPokemon from "./ReadyPokemon";

import ListTokens from "./Tokens/ListTokens";

const PlayGround = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => (!props.AI ? "column" : "column-reverse")};
`;
const GridForCards = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: clamp(180px, 15vw, 290px);
`;
const Tokens = styled.div``;

function GroundForCards({ pokemons, tokens, AI }) {
    return (
        <PlayGround AI={AI}>
            <GridForCards>
                <AnimatePresence>
                    {pokemons.map((el, i) => (
                        <ReadyPokemon value={el} key={el.id} />
                    ))}
                </AnimatePresence>
            </GridForCards>

            <Tokens>
                <ListTokens list={tokens} AI={AI} />
            </Tokens>
        </PlayGround>
    );
}
export default GroundForCards;
