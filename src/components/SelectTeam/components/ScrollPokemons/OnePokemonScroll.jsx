import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToTeam } from "../../../../_Actions/mainAction";
import CardPokemon from "../../../pokemon/CardPokemon";

const Card = styled.div`
    padding: 0 20px;
    transform: scale(0.85);
`;

export default function OnePokemonScroll({ value }) {
    const dispatch = useDispatch();
    return (
        <Card onClick={() => dispatch(addToTeam(value))}>
            <CardPokemon value={value} versionMini />
        </Card>
    );
}
