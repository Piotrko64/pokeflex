import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
    addItemsFromLocalStorage,
    deleteFromTeam,
    deleteFromTeamToken,
} from "../../../../_Reducer/YourItems";

import CardPokemon from "../../../CardPokemon/CardPokemon";

import OneTokenScroll from "../ScrollTokens/OneTokenScroll";
import TitleScroll from "../TitleScroll";

const Alert = styled.div`
    background: "";
    text-align: center;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;
    align-items: center;
`;

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
    margin: 10px;
`;
const OneTokenSelect = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
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
                {!PokemonsTeamSelect.length && (
                    <Alert>You must gather your party before venturing forth</Alert>
                )}
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
