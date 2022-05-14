import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import ReadyPokemon from "./ReadyPokemon";
import { whereIAm } from "../../_Actions/mainAction";
import ListTokens from "./Tokens/ListTokens";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

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
const PlayGround = styled.div`
    display: flex;
    flex-direction: column;
`;
const Tokens = styled.div``;

function GroundForCards({ pokemons, tokens }) {
    return (
        <PlayGround>
            <TransitionGroup className="gridForCards">
                {pokemons.map((el, i) => (
                    <CSSTransition in={true} key={el.id} timeout={3000} classNames="dead">
                        <ReadyPokemon value={el} key={el.id} />
                    </CSSTransition>
                ))}
            </TransitionGroup>

            <Tokens>
                <ListTokens list={tokens} />
            </Tokens>
        </PlayGround>
    );
}
export default GroundForCards;
