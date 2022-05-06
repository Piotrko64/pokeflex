import { useRef } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import ReadyPokemon from "./ReadyPokemon";

const ForCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 240px);
    grid-template-rows: repeat(2, 380px);
    max-width: 750px;
    place-items: center;
`;

function GroundForCards({ pokemons }) {
    const FriendsTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const whoAttack = useSelector((state) => state.FriendsTeam.whoAttack);
    const whoIsAttack = useSelector((state) => state.FriendsTeam.whoIsAttack);

    return (
        <>
            <ForCards>
                {pokemons.map((el, i) => (
                    <ReadyPokemon value={el} key={el.id} />
                ))}
            </ForCards>
        </>
    );
}
export default GroundForCards;
