import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { pokemonInterface } from "../../../../types/pokemonTokenData/pokemonInterface";
import { oneTokenInterface } from "../../../../types/pokemonTokenData/tokenInterface";
import { useSelectorYourItems } from "../../../../_Reducer/selectors/useSelectorYourItems";
import {
    addItemsFromLocalStorage,
    deleteFromTeam,
    deleteFromTeamToken,
} from "../../../../_Reducer/YourItems";

import { CardPokemon } from "../../../CardPokemon/CardPokemon";

import { OneTokenScroll } from "../ScrollTokens/OneTokenScroll";
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
    const dispatch = useDispatch();
    const { teamFight, tokensFight } = useSelectorYourItems();
    useEffect(() => {
        dispatch(addItemsFromLocalStorage());
    }, []);
    return (
        <FlexCenter>
            <TitleScroll title="Your Team" />
            <Row>
                {teamFight.map((el: pokemonInterface) => (
                    <OneCardSelect key={el.name} onClick={() => dispatch(deleteFromTeam(el.name))}>
                        <CardPokemon value={el} versionMini />
                    </OneCardSelect>
                ))}
                {!teamFight.length && <Alert>You must gather your party before venturing forth</Alert>}
            </Row>
            <Row>
                {tokensFight.map((el: oneTokenInterface) => (
                    <OneTokenSelect key={el.name} onClick={() => dispatch(deleteFromTeamToken(el.name))}>
                        <OneTokenScroll item={el} noBattle />
                    </OneTokenSelect>
                ))}
            </Row>
        </FlexCenter>
    );
}
