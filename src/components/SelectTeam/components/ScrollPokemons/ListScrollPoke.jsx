import { render } from "react-dom";
import styled from "styled-components";
import { examplePokemons } from "../../../../data/examplePokemons";
import OnePokemonScroll from "./OnePokemonScroll";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const ScrollList = styled.div`
    display: flex;
`;
const Scroll = styled.div`
    width: 100%;
    overflow-x: scroll;
`;

export default function ListScrollPoke() {
    const [width, setWidth] = useState(0);

    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offSetWidth);
    }, []);
    return (
        <Scroll>
            <ScrollList
                as={motion.div}
                drag="x"
                initial={{ x: 0, y: window.innerWidth }}
                dragConstraints={{ right: 0 }}
                ref={carousel}
            >
                {examplePokemons.map((el) => (
                    <OnePokemonScroll key={el} value={el} />
                ))}
            </ScrollList>
        </Scroll>
    );
}
