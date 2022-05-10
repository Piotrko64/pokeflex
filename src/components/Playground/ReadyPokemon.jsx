import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardPokemon from "../pokemon/CardPokemon";
import { animation, choose, pushCoordinate } from "../../_Actions/mainAction";
import { useDispatch, useSelector } from "react-redux";
import AnimHP from "../animOneStatComponents/AnimHp";
import { CSSTransition } from "react-transition-group";
import { Transition } from "react-transition-group";

const Pokemon = styled.div`
    transform: scale(0.7);
    min-width: 280px;
    z-index: 9;
    transition: all 0.2s ease-in-out;
    position: relative;
`;

function ReadyPokemon(props) {
    const [hpChange, setHpChange] = useState(props.value.hp);
    const [showNewStat, setShowNewStat] = useState(0);
    const [hp, setHp] = useState("");
    const pokemonRef = useRef(null);
    const dispatch = useDispatch();
    const whoAttackID = useSelector((state) => state.FriendsTeam.whoAttackID);
    const All = useSelector((state) => state.FriendsTeam);

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

            setTimeout(() => {
                pokemonRef.current.style.zIndex = `9`;
                pokemonRef.current.style.transform = `scale(0.7)`;
            }, 220);
        }
    }, [whereIsEnemy]);

    useEffect(() => {
        dispatch(
            pushCoordinate(props.value.id, [
                pokemonRef.current.getBoundingClientRect().x,
                pokemonRef.current.getBoundingClientRect().y,
            ])
        );
    }, []);
    useEffect(() => {
        let timeAnim;
        clearTimeout(timeAnim);
        const { hp } = props.value;
        setShowNewStat(-(hpChange - hp));
        setHpChange(hp);
        timeAnim = setTimeout(() => {
            setShowNewStat(0);
        }, 1500);
    }, [All]);
    return (
        <Pokemon onClick={handleClick} ref={pokemonRef}>
            <CardPokemon value={props.value} />
            <CSSTransition in={!!showNewStat} timeout={1500} classNames="animHP">
                <AnimHP value={showNewStat} />
            </CSSTransition>
        </Pokemon>
    );
}

export default ReadyPokemon;
