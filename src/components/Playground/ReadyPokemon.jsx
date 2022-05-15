import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardPokemon from "../pokemon/CardPokemon";
import { animation, choose, moveToGrave, pushCoordinate } from "../../_Actions/mainAction";
import { useDispatch, useSelector } from "react-redux";
import AnimHP from "../animOneStatComponents/AnimHp";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";

const Pokemon = styled.div`
    transform: scale(0.5);
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
        if (pokemonRef.current) {
            setTimeout(
                () =>
                    dispatch(
                        pushCoordinate(props.value.id, [
                            pokemonRef.current.getBoundingClientRect().x,
                            pokemonRef.current.getBoundingClientRect().y,
                        ])
                    ),
                600
            );
        }
    }, [All.myTeam.length, All.enemyTeam.length]);
    useEffect(() => {
        if (props.value.id === whoAttackID) {
            const coordinateX = whereIsEnemy[0] - pokemonRef.current.getBoundingClientRect().x + 15;
            const coordinateY = whereIsEnemy[1] - pokemonRef.current.getBoundingClientRect().y;

            pokemonRef.current.style.zIndex = `999`;
            pokemonRef.current.style.transform = `scale(0.5) translateX(${coordinateX * 1.8}px) translateY(${
                coordinateY * 1.8
            }px)`;

            setTimeout(() => {
                pokemonRef.current.style.zIndex = `9`;
                pokemonRef.current.style.transform = `scale(0.5)`;
            }, 220);
        }
    }, [whereIsEnemy]);

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
            >
                <CardPokemon value={props.value} />
            </motion.div>
            <CSSTransition in={!!showNewStat} timeout={1500} classNames="animHP">
                <AnimHP value={showNewStat} />
            </CSSTransition>
        </Pokemon>
    );
}

export default ReadyPokemon;
