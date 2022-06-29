import { useDispatch } from "react-redux";
import styled from "styled-components";
import { pokemonInterface } from "../../../../types/pokemonTokenData/pokemonInterface";
import UseSelectorYourItems from "../../../../_Reducer/selectors/useSelectorYourItems";
import { addToTeam } from "../../../../_Reducer/YourItems";

import { CardPokemon } from "../../../CardPokemon/CardPokemon";

const Card = styled.div`
    padding: 0 10px;
    transition: all 0.3s linear;
    transform: scale(0.85);
    filter: ${(props: { choose: boolean }) => props.choose && "grayscale(1)"};
`;

export default function OnePokemonScroll({ value }: { value: pokemonInterface }) {
    const dispatch = useDispatch();
    const { teamFight } = UseSelectorYourItems();

    return (
        <Card
            onClick={() => dispatch(addToTeam(value))}
            choose={teamFight.some((e: pokemonInterface) => e.name === value.name)}
        >
            <CardPokemon value={value} versionMini />
        </Card>
    );
}
