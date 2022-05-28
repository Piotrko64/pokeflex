import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardPokemon from "../pokemon/CardPokemon";
import { animation, choose, moveToGrave, pushCoordinate } from "../../_Actions/mainAction";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

import blockSound from "../../Audio/blockAction.wav";
import ListAnimHP from "../animOneStatComponents/ListAnimHp";
const blockPlay = new Audio(blockSound);

const Pokemon = styled.div`
    z-index: 9;
    transition: all 0.18s ease-in-out;
    position: relative;
`;

function ReadyPokemon(props) {
    const [hpChange, setHpChange] = useState(props.value.hp);
    const [arrayHp, setArrayHp] = useState([]);

    const pokemonRef = useRef(null);

    const dispatch = useDispatch();

    const whoAttackID = useSelector((state) => state.FriendsTeam.whoAttackID);

    // const All = useSelector((state) => state.FriendsTeam);
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
            blockPlay.play();
        }
    }
    useEffect(() => {
        dispatch(
            pushCoordinate(props.value.id, [
                pokemonRef.current.getBoundingClientRect().x,
                pokemonRef.current.getBoundingClientRect().y,
            ])
        );
        const Interval = setInterval(
            () =>
                dispatch(
                    pushCoordinate(props.value.id, [
                        pokemonRef.current.getBoundingClientRect().x,
                        pokemonRef.current.getBoundingClientRect().y,
                    ])
                ),
            200
        );

        return () => {
            clearInterval(Interval);
        };
    }, []);
    useEffect(() => {
        if (props.value.id === whoAttackID) {
            const coordinateX = whereIsEnemy[0] - pokemonRef.current.getBoundingClientRect().x;

            const coordinateY = whereIsEnemy[1] - pokemonRef.current.getBoundingClientRect().y - 10;

            pokemonRef.current.style.zIndex = `999`;
            pokemonRef.current.style.transform = `translateX(${coordinateX}px) translateY(${coordinateY}px)`;

            setTimeout(() => {
                pokemonRef.current.style.zIndex = `9`;
                pokemonRef.current.style.transform = ``;
            }, 200);
        }
    }, [whereIsEnemy]);

    useEffect(() => {
        const { hp } = props.value;

        const newHpChange = -(hpChange - hp);

        newHpChange && setArrayHp((el) => [...el, newHpChange]);

        setHpChange(props.value.hp);
    }, [props.value.hp]);
    useEffect(() => {
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
                className="flex"
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
