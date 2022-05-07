import { useEffect, useRef } from "react";
import styled from "styled-components";
import CardPokemon from "../pokemon/CardPokemon";
import { attack, chooseEnemy, fight, friendDiv, whereIAm, whereIsEnemy } from "../../_Actions/mainAction";
import { examplePokemons } from "../../data/examplePokemons";
import { useDispatch, useSelector } from "react-redux";

const Pokemon = styled.div`
    transform: scale(0.7);
    min-width: 280px;
    z-index: 9;
    transition: all 0.2s ease-in-out;
`;

function ReadyPokemon(props) {
    const pokemonRef = useRef(null);
    const dispatch = useDispatch();
    const whoAttack = useSelector((state) => state.FriendsTeam.whoAttack);
    const where = useSelector((state) => state.CoordinatesReducer);

    async function handleClick(e) {
        if (!whoAttack) {
            dispatch(whereIAm(props.value.id));
            dispatch(attack(props.value.id));
        } else {
            const { x, y } = pokemonRef.current.getBoundingClientRect();
            dispatch(chooseEnemy(props.value.id));
            dispatch(fight());
            dispatch(whereIsEnemy([x, y]));
        }
    }
    useEffect(() => {
        console.log(where.Enemy);
        if (props.value.id === where.Me) {
            console.log();
            pokemonRef.current.style.zIndex = `99`;
            pokemonRef.current.style.transform = `scale(0.8) translateX(${where.Enemy[0]}px) translateY(${where.Enemy[1]}px)`;
            dispatch(whereIsEnemy(""));
            setTimeout(() => {
                pokemonRef.current.style.zIndex = `9`;
                pokemonRef.current.style.transform = `scale(0.7)`;
            }, 220);
        }
        console.log(pokemonRef.current.style);
    }, [where.Enemy]);
    return (
        <Pokemon onClick={handleClick} ref={pokemonRef}>
            <CardPokemon value={props.value} />
        </Pokemon>
    );
}

export default ReadyPokemon;
