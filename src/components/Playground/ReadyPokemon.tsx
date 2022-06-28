import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardPokemon from "../CardPokemon/CardPokemon";

import { useDispatch } from "react-redux";

import { motion } from "framer-motion";

import blockSound from "../../Audio/actions/blockAction.wav";
import ListAnimHP from "../animOneStatComponents/ListAnimHp";
import { audioPlay } from "../../functions/audioPlay";
import usePushCoordinates from "../../hooks/fightHooks/coordinates/usePushCoordinates";
import useYourAttack from "../../hooks/fightHooks/toAnimations/useYourAttack";
import { animation, choose, moveToGrave } from "../../_Reducer/StateFight";
import { useSelectorStateFight } from "../../_Reducer/selectors/useSelectorStateFight";
import { pokemonInterface } from "../../types/pokemonTokenData/pokemonInterface";

const Pokemon = styled.div`
    z-index: 9;
    transition: all 0.2s ease-in-out;
    position: relative;
    margin: 15px;
`;

function ReadyPokemon({ value }: { value: pokemonInterface }) {
    const [hpChange, setHpChange] = useState<any>(value.hp);
    const [arrayHp, setArrayHp] = useState<Array<number>>([]);

    const pokemonRef = useRef<HTMLDivElement>(null)!;

    const dispatch = useDispatch();

    const { yourTurn } = useSelectorStateFight();

    usePushCoordinates(value, pokemonRef);
    useYourAttack(value, pokemonRef);

    function deleteHpChange(): void {
        setArrayHp((ar) => ar.filter((_, i) => i !== 0));
    }

    function handleClick() {
        if (yourTurn) {
            dispatch(choose(value.id));

            const { x, y } = pokemonRef.current?.getBoundingClientRect()!;

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

        if (value.hp <= 0) {
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

            <ListAnimHP listHp={arrayHp} deleteHpChange={deleteHpChange} />
        </Pokemon>
    );
}

export default ReadyPokemon;
