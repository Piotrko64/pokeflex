import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardPokemon from "../CardPokemon/CardPokemon";

import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

import blockSound from "../../Audio/actions/blockAction.wav";
import ListAnimHP from "../animOneStatComponents/ListAnimHp";
import audioPlay from "../../functions/audioPlay";
import usePushCoordinates from "../../hooks/fightHooks/coordinates/usePushCoordinates";
import useYourAttack from "../../hooks/fightHooks/toAnimations/useYourAttack";
import { animation, choose, moveToGrave } from "../../_Reducer/StateFight";

const Pokemon = styled.div`
    z-index: 9;
    transition: all 0.2s ease-in-out;
    position: relative;
    margin: 15px;
`;

function ReadyPokemon({ value }) {
    const [hpChange, setHpChange] = useState(value.hp);
    const [arrayHp, setArrayHp] = useState([]);

    const pokemonRef = useRef(null);

    const dispatch = useDispatch();

    const yourTurn = useSelector((state) => state.FriendsTeam.yourTurn);

    usePushCoordinates(value, pokemonRef);
    useYourAttack(value, pokemonRef);

    function deleteHpChange() {
        setArrayHp((ar) => ar.filter((_, i) => i !== 0));
    }

    function handleClick() {
        if (yourTurn) {
            dispatch(choose(value.id));

            const { x, y } = pokemonRef.current.getBoundingClientRect();

            dispatch(animation([x, y]));
        } else {
            audioPlay(blockSound);
        }
    }

    useEffect(() => {
        const { hp } = value;

        const newHpChange = -(hpChange - hp);

        newHpChange && setArrayHp((el) => [...el, newHpChange]);

        setHpChange(value.hp);
        if (value.hp < 1) {
            dispatch(moveToGrave(value));
        }
    }, [value.hp]);

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
                <CardPokemon value={value} versionMini />
            </motion.div>
            <>
                <ListAnimHP listHp={arrayHp} deleteHpChange={deleteHpChange} />
            </>
        </Pokemon>
    );
}

export default ReadyPokemon;
