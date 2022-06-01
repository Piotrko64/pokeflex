import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToTeam } from "../../../../_Actions/mainAction";
import CardPokemon from "../../../pokemon/CardPokemon";

const Card = styled.div`
    padding: 0 20px;
    transition: all 0.3s linear;
    transform: scale(0.85);
    filter: ${(props) => props.choose && "grayscale(1)"};
`;

export default function OnePokemonScroll({ value }) {
    const dispatch = useDispatch();
    const teamFight = useSelector((state) => state.YourItemsReducer.TeamFight);

    return (
        <Card
            onClick={() => dispatch(addToTeam(value))}
            choose={teamFight.find((e) => e.name === value.name)}
        >
            <CardPokemon value={value} versionMini />
        </Card>
    );
}
