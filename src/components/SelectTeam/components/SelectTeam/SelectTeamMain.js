import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteFromTeam, deleteFromTeamToken } from "../../../../_Actions/mainAction";

import CardPokemon from "../../../pokemon/CardPokemon";
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
const Button = styled.button`
    padding: 10px;
`;
export default function SelectTeamMain() {
    const PokemonsTeamSelect = useSelector((state) => state.YourItemsReducer.TeamFight);
    const TokensTeamSelect = useSelector((state) => state.YourItemsReducer.TokensFight);
    const dispatch = useDispatch();

    return (
        <FlexCenter>
            <TitleScroll title="Your Team" />
            <Row>
                {PokemonsTeamSelect.map((el) => (
                    <OneCardSelect key={el.id} onClick={() => dispatch(deleteFromTeam(el.id))}>
                        <CardPokemon value={el} versionMini />
                    </OneCardSelect>
                ))}
            </Row>
            <Row>
                {TokensTeamSelect.map((el) => (
                    <OneTokenSelect key={el.id} onClick={() => dispatch(deleteFromTeamToken(el.id))}>
                        <OneTokenScroll key={el} item={el} noBattle />
                    </OneTokenSelect>
                ))}
            </Row>
            <Row>
                <Button> Save </Button> <Button> Back </Button>
            </Row>
        </FlexCenter>
    );
}
