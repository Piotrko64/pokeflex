import { Stats } from "./Stats";
import styled from "styled-components";

import { PokemonInterface } from "../../types/pokemonTokenData/PokemonInterface";
import { useSelectorStateFight } from "../../_Reducer/selectors/useSelectorStateFight";

interface propsInt {
    choose?: boolean;
    versionMini?: boolean;
}

const Card = styled.div`
    height: 100%;

    max-width: ${(props: propsInt) => (props.versionMini ? "175px" : "320px")};
    margin: auto;
    background: black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 25px;
    flex-direction: column;
    font-size: ${(props) => (props.versionMini ? "14px" : "28px")};
    width: ${(props) => props.versionMini && "180px"};
    overflow: hidden;
    transform: ${(props) => props.choose && "scale(1.1)"};
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: ${(props) =>
            props.choose ? "0px 0px 46px -1px red" : "0px 0px 46px -1px rgba(255, 255, 255, 1)"};
        transform: scale(1.05);
    }
    box-shadow: ${(props) => (props.choose ? "0px 0px 46px -1px red" : "0px 0px 46px -1px transparent")};
`;
const Img = styled.img`
    height: ${(props: propsInt) => (props.versionMini ? "110px" : "240px")};
    transform: "scale(0.5)";
    filter: ${(props) => (props.choose ? "drop-shadow(0px 0px 95px red)" : "")};
`;
export function CardPokemon({ value, versionMini }: { value: PokemonInterface; versionMini?: boolean }) {
    const { whoAttackID } = useSelectorStateFight();

    return (
        // <Atropos className="atropos">
        <Card versionMini={versionMini} choose={value.id === whoAttackID}>
            <Img
                data-atropos-opacity="1"
                data-atropos-offset="5"
                src={value.image}
                alt=""
                versionMini={versionMini}
            />

            <Stats value={value} versionMini={versionMini} />
        </Card>
        // </Atropos>
    );
}
