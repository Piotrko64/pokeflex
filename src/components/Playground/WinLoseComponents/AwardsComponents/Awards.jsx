import styled from "styled-components";
import Confetti from "react-confetti";
import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import levels from "../../../../data/dataLevels/levelsMainList";
import ListAwards from "./ListAwards";
import ButtonsNavigate from "./ButtonsNavigate";

const AwardsSection = styled.div`
    color: black;
    position: relative;
    margin-bottom: 20px;
    &::after,
    &::before {
        transform: translate(-10%, -50%);
        top: 50%;
        left: -100%;
        content: "";
        background-color: black;
        position: absolute;
        height: 5px;
        width: 100%;
    }
    &::before {
        left: 100%;
        transform: translate(10%, -50%);
    }
`;

function Awards() {
    const location = useLocation();
    const levelID = location.pathname.split("/")[2];
    const findAwards = levels.find((el) => el.id === levelID);
    const awardToken = findAwards?.award?.tokens;
    const awardPokemon = findAwards?.award?.pokemons;

    return (
        <Fragment>
            <AwardsSection>Your Awards</AwardsSection>

            <ListAwards token={awardToken} pokemon={awardPokemon} />
            <ButtonsNavigate />
        </Fragment>
    );
}
export default Awards;
