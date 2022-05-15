import Stats from "./Stats";
import styled from "styled-components";
import Atropos from "atropos/react";
const Card = styled.div`
    height: 100%;
    width: 100%;
    max-width: 320px;
    background: black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 25px;
    flex-direction: column;
    box-shadow: 0px 0px 10px rgba(75, 1, 77, 0.98);
    overflow: hidden;
    padding-top: 10px;
`;
const Img = styled.img`
    height: 200px;
`;
function CardPokemon({ value }) {
    return (
        <Atropos className="atropos">
            <Card>
                <Img data-atropos-opacity="1" data-atropos-offset="5" src={value.image} alt="" />

                <Stats value={value} />
            </Card>
        </Atropos>
    );
}

export default CardPokemon;
