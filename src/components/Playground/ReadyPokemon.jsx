import { useRef } from "react";
import styled from "styled-components";
import CardPokemon from "../pokemon/CardPokemon";
import { attack, chooseEnemy, fight } from "../../_Actions/mainAction";
import { examplePokemons } from "../../data/examplePokemons";
import { useDispatch, useSelector } from "react-redux";

const Pokemon = styled.div`
    transform: scale(0.7);
    min-width: 280px;
`;

function ReadyPokemon({ value }) {
    const pokemonRef = useRef(null);
    const dispatch = useDispatch();
    const whoAttack = useSelector((state) => state.FriendsTeam.whoAttack);
    const whoAttackID = useSelector((state) => state.FriendsTeam.whoAttackID);
    function handleClick(e) {
        console.log(e);
        console.log(pokemonRef.current.getBoundingClientRect());
        if (!whoAttack) {
            dispatch(attack(value.id));
        } else {
            dispatch(chooseEnemy(value.id));
            dispatch(fight());
        }
        console.log(whoAttack);
    }
    return (
        <Pokemon onClick={() => handleClick(value)} ref={pokemonRef}>
            <CardPokemon value={value} />
        </Pokemon>
    );
}

export default ReadyPokemon;
