import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardPokemon from "../CardPokemon/CardPokemon";
import { animation, choose, moveToGrave, pushCoordinate } from "../../_Actions/stateFightActions";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

import blockSound from "../../Audio/actions/blockAction.wav";
import ListAnimHP from "../animOneStatComponents/ListAnimHp";
import audioPlay from "../../functions/audioPlay";

const Pokemon = styled.div`
    z-index: 9;
    transition: all 0.2s ease-in-out;
    position: relative;
    margin: 15px;
`;

function ReadyPokemon(props) {
    const [hpChange, setHpChange] = useState(props.value.hp);
    const [arrayHp, setArrayHp] = useState([]);

    const pokemonRef = useRef(null);

    const dispatch = useDispatch();
    const All = useSelector((state) => state.FriendsTeam);
    const whoAttackID = useSelector((state) => state.FriendsTeam.whoAttackID);

    const yourTurn = useSelector((state) => state.FriendsTeam.yourTurn);

    const whereIsEnemy = useSelector((state) => state.FriendsTeam.whereIsEnemy);

    function deleteHpChange() {
        setArrayHp((ar) => ar.filter((_, i) => i !== 0));
    }

    function handleClick() {
        if (yourTurn) {
            dispatch(choose(props.value.id));

            const { x, y } = pokemonRef.current.getBoundingClientRect();

            dispatch(animation([x, y]));
        } else {
            audioPlay(blockSound);
        }
    }
    useEffect(() => {
        dispatch(
            pushCoordinate(
                props.value.id,
                [pokemonRef.current.getBoundingClientRect().x, pokemonRef.current.getBoundingClientRect().y],
                props.value.name
            )
        );
        setTimeout(() => {
            dispatch(
                pushCoordinate(
                    props.value.id,
                    [
                        pokemonRef.current.getBoundingClientRect().x,
                        pokemonRef.current.getBoundingClientRect().y,
                    ],
                    props.value.name
                )
            );
        }, 500);
    }, [All.myTeam.length, All.enemyTeam.length]);
    useEffect(() => {
        if (props.value.id === whoAttackID) {
            const coordinateX = +whereIsEnemy[0] - +pokemonRef.current.getBoundingClientRect().x;

            const coordinateY = +whereIsEnemy[1] - +pokemonRef.current.getBoundingClientRect().y;

            pokemonRef.current.style.zIndex = `999`;
            pokemonRef.current.style.transform = `translateX(${coordinateX}px) translateY(${coordinateY}px)`;

            setTimeout(() => {
                if (!pokemonRef) {
                    return;
                }

                pokemonRef.current.style.zIndex = `9`;
                pokemonRef.current.style.transform = `translateX(0px) translateY(0px)`;
            }, 200);
        }
    }, [whereIsEnemy]);

    useEffect(() => {
        const { hp } = props.value;

        const newHpChange = -(hpChange - hp);

        newHpChange && setArrayHp((el) => [...el, newHpChange]);

        setHpChange(props.value.hp);
        if (props.value.hp < 1) {
            dispatch(moveToGrave(props.value));
        }
    }, [props.value.hp]);

    return (
        <Pokemon onClick={handleClick} ref={pokemonRef}>
            <motion.div
                layout
                animate={{ opacity: 1 }}
                exit={{
                    y: 100,
                    opacity: 0,
                }}
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0 }}
            >
                <CardPokemon value={props.value} versionMini />
            </motion.div>
            <>
                <ListAnimHP listHp={arrayHp} deleteHpChange={deleteHpChange} />
            </>
        </Pokemon>
    );
}

export default ReadyPokemon;
