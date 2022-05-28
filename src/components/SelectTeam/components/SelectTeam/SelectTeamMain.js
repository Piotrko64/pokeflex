import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteFromTeam } from "../../../../_Actions/mainAction";
import CardPokemon from "../../../pokemon/CardPokemon";

const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`;
const OneCardSelect = styled.div`
    display: flex;
    justify-content: center;
`;
export default function SelectTeamMain() {
    const PokemonsTeamSelect = useSelector((state) => state.YourItemsReducer.TeamFight);
    const dispatch = useDispatch();

    return (
        <FlexCenter>
            {PokemonsTeamSelect.map((el) => (
                <OneCardSelect key={el.id} onClick={() => dispatch(deleteFromTeam(el.id))}>
                    <CardPokemon value={el} versionMini />
                </OneCardSelect>
            ))}
        </FlexCenter>
    );
}
