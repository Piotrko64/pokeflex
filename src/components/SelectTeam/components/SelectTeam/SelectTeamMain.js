import { useSelector } from "react-redux";
import styled from "styled-components";
import CardPokemon from "../../../pokemon/CardPokemon";

const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`;
export default function SelectTeamMain() {
    const PokemonsTeamSelect = useSelector((state) => state.YourItemsReducer.TeamFight);

    return (
        <FlexCenter>
            {PokemonsTeamSelect.map((el) => (
                <CardPokemon value={el} versionMini />
            ))}
        </FlexCenter>
    );
}
