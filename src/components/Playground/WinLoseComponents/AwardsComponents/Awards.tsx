import styled from "styled-components";

import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { levels } from "../../../../data/dataLevels/levels";
import ListAwards from "./ListAwards";
import { levelInterface } from "../../../../types/levels/levelInterface";

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
    const findAwards = levels.find((el: levelInterface) => el.id === levelID);
    const awardToken = findAwards?.award.tokens!;
    const awardPokemon = findAwards?.award.pokemons!;

    return (
        <Fragment>
            {(awardToken || awardPokemon) && <AwardsSection>Your Awards</AwardsSection>}

            <ListAwards token={awardToken} pokemon={awardPokemon} />
        </Fragment>
    );
}
export default Awards;