import styled from "styled-components";
import CardPokemon from "../../../pokemon/CardPokemon";

const Card = styled.div`
    padding: 0 20px;
    transform: scale(0.85);
`;

export default function OnePokemonScroll({ value }) {
    return (
        <Card>
            <CardPokemon value={value} versionMini />
        </Card>
    );
}
