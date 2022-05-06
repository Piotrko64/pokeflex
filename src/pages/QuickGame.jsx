import { useRef } from "react";
import styled from "styled-components";
import ReadyPokemon from "../components/Playground/ReadyPokemon";
import CardPokemon from "../components/pokemon/CardPokemon";
import Stats from "../components/pokemon/Stats";
import { examplePokemons } from "../data/examplePokemons";
import { useSelector, useDispatch } from "react-redux";

const Friends = styled.div`
    display: flex;
`;
function QuickGame() {
    const FriendsTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const whoAttack = useSelector((state) => state.FriendsTeam.whoAttack);
    const whoIsAttack = useSelector((state) => state.FriendsTeam.whoIsAttack);

    return (
        <Friends>
            attack of {whoAttack} to {whoIsAttack}
            <ReadyPokemon value={FriendsTeam[0]} />
            <ReadyPokemon value={FriendsTeam[1]} />
        </Friends>
    );
}

export default QuickGame;
