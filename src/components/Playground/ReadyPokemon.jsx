import { useEffect, useRef } from "react";
import styled from "styled-components";
import CardPokemon from "../pokemon/CardPokemon";
import { animation, choose, noEnemy } from "../../_Actions/mainAction";
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
    const whoAttackID = useSelector((state) => state.FriendsTeam.whoAttackID);
    const myTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const whoIsAttack = useSelector((state) => state.FriendsTeam.whoIsAttack);
    const whereIsEnemy = useSelector((state) => state.FriendsTeam.whereIsEnemy);

    async function handleClick() {
        dispatch(choose(props.value.id));
        const { x, y } = pokemonRef.current.getBoundingClientRect();

        dispatch(animation([x, y]));
    }
    useEffect(() => {
        if (props.value.id === whoAttackID) {
            const coordinateX = whereIsEnemy[0] - pokemonRef.current.getBoundingClientRect().x + 15;
            const coordinateY = whereIsEnemy[1] - pokemonRef.current.getBoundingClientRect().y;
            pokemonRef.current.style.zIndex = `99`;
            pokemonRef.current.style.transform = `scale(0.8) translateX(${coordinateX}px) translateY(${coordinateY}px)`;
            // dispatch(noEnemy());
            setTimeout(() => {
                pokemonRef.current.style.zIndex = `9`;
                pokemonRef.current.style.transform = `scale(0.7)`;
            }, 220);
        }
    }, [whereIsEnemy]);
    return (
        <Pokemon onClick={handleClick} ref={pokemonRef}>
            <CardPokemon value={props.value} />
        </Pokemon>
    );
}

export default ReadyPokemon;
