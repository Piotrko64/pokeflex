import { useRef } from "react";
import styled from "styled-components";
import ReadyPokemon from "../components/Playground/ReadyPokemon";
import CardPokemon from "../components/pokemon/CardPokemon";
import Stats from "../components/pokemon/Stats";
import { examplePokemons } from "../data/examplePokemons";
import { useSelector, useDispatch } from "react-redux";

import GroundForCards from "../components/Playground/groundFriends";

const Friends = styled.div`
    display: flex;
`;
const WholeField = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1800px;
`;
function QuickGame() {
    const FriendsTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const EnemyTeam = useSelector((state) => state.FriendsTeam.enemyTeam);
    const whoAttack = useSelector((state) => state.FriendsTeam.whoAttack);
    const whoIsAttack = useSelector((state) => state.FriendsTeam.whoIsAttack);

    return (
        <>
            <h1>{`${whoAttack} attack ${whoIsAttack}`} </h1>
            <WholeField>
                <GroundForCards pokemons={FriendsTeam} />
                <GroundForCards pokemons={EnemyTeam} />
            </WholeField>
        </>
    );
}

export default QuickGame;
