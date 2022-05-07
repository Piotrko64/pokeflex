import { useRef } from "react";
import styled from "styled-components";
import CardPokemon from "../pokemon/CardPokemon";
import { attack, chooseEnemy, fight, friendDiv, whereIAm, whereIsEnemy } from "../../_Actions/mainAction";
import { examplePokemons } from "../../data/examplePokemons";
import { useDispatch, useSelector } from "react-redux";

const Pokemon = styled.div`
    transform: scale(0.7);
    min-width: 280px;
`;

function ReadyPokemon(props) {
    const pokemonRef = useRef(null);
    const dispatch = useDispatch();
    const whoAttack = useSelector((state) => state.FriendsTeam.whoAttack);
    const where = useSelector((state) => state.CoordinatesReducer);

    function handleClick(e) {
        const { x, y } = pokemonRef.current.getBoundingClientRect();
        console.log(props.cardDiv);

        if (!whoAttack) {
            dispatch(attack(props.value.id));
            console.log(pokemonRef);
            props.setDiv(pokemonRef.current);

            console.log(props.cardDiv);
        } else {
            dispatch(chooseEnemy(props.value.id));

            dispatch(fight());
            props.setTarget(e);
            props.move();
        }
    }
    return (
        <Pokemon onClick={handleClick} ref={pokemonRef}>
            <CardPokemon value={props.value} />
        </Pokemon>
    );
}

export default ReadyPokemon;
