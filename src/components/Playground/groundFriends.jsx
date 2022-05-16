import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import ReadyPokemon from "./ReadyPokemon";
import { whereIAm } from "../../_Actions/mainAction";
import ListTokens from "./Tokens/ListTokens";

const PlayGround = styled.div`
    display: flex;

    flex-direction: ${(props) => (!props.AI ? "column" : "column-reverse")};
`;
const GridForCards = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: clamp(210px, 20vw, 290px);
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
