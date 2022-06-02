import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
    addItemsFromLocalStorage,
    deleteFromTeam,
    deleteFromTeamToken,
} from "../../../../_Actions/mainAction";

import CardPokemon from "../../../pokemon/CardPokemon";
import ButtonsComponent from "../ButtonsComponent";
import OneTokenScroll from "../ScrollTokens/OneTokenScroll";
import TitleScroll from "../TitleScroll";

const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const Row = styled.div`
    display: flex;
`;
const OneCardSelect = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;
const OneTokenSelect = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;

export default function SelectTeamMain() {
    const PokemonsTeamSelect = useSelector((state) => state.YourItemsReducer.TeamFight);
    const TokensTeamSelect = useSelector((state) => state.YourItemsReducer.TokensFight);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addItemsFromLocalStorage());
    }, []);
    return (
        <FlexCenter>
            <TitleScroll title="Your Team" />
            <Row>
                {PokemonsTeamSelect.map((el) => (
                    <OneCardSelect key={el.name} onClick={() => dispatch(deleteFromTeam(el.name))}>
                        <CardPokemon value={el} versionMini />
                    </OneCardSelect>
                ))}
            </Row>
            <Row>
                {TokensTeamSelect.map((el) => (
                    <OneTokenSelect key={el.name} onClick={() => dispatch(deleteFromTeamToken(el.name))}>
                        <OneTokenScroll item={el} noBattle />
                    </OneTokenSelect>
                ))}
            </Row>
        </FlexCenter>
    );
}
