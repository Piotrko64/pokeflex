import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import ReadyPokemon from "./ReadyPokemon";
import { whereIAm } from "../../_Actions/mainAction";
import ListTokens from "./Tokens/ListTokens";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

const PlayGround = styled.div`
    display: flex;
    flex-direction: column;
`;
const Tokens = styled.div``;

function GroundForCards({ pokemons, tokens, AI }) {
    return (
        <PlayGround>
            <motion.div className="gridForCards">
                <AnimatePresence>
                    {pokemons.map((el, i) => (
                        <ReadyPokemon value={el} key={el.id} />
                    ))}
                </AnimatePresence>
            </motion.div>

            <Tokens>
                <ListTokens list={tokens} AI={AI} />
            </Tokens>
        </PlayGround>
    );
}
export default GroundForCards;
