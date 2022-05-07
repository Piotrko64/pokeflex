import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import ReadyPokemon from "./ReadyPokemon";

const ForCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 240px);
    grid-template-rows: repeat(2, 380px);
    grid-template-areas:
        "a b"
        "c b";
    max-width: 750px;
    place-items: center;
`;

function GroundForCards({ pokemons }) {
    const [cardDivMe, setCardDivMe] = useState("");
    const [target, setTarget] = useState("");
    useEffect(() => {
        console.log("ZMIAN", cardDivMe, target);
        if (cardDivMe) {
            // cardDivMe.style.color = "red";
        }
        if (target) {
            console.log(target);
        }
        console.log(cardDivMe);
    }, [cardDivMe, target]);
    function move(e) {
        console.log(e);
        console.log("a", cardDivMe);
        // cardDivMe.style.transform = `translateX(${e.target.pageY})`;
    }
    return (
        <>
            <ForCards>
                {pokemons.map((el, i) => (
                    <ReadyPokemon
                        value={el}
                        key={el.id}
                        setDiv={(e) => setCardDivMe(e)}
                        setTarget={(e) => setTarget(e)}
                        cardDiv={cardDivMe}
                        move={() => move}
                    />
                ))}
            </ForCards>
        </>
    );
}
export default GroundForCards;
