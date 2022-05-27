import { render } from "react-dom";
import styled from "styled-components";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const ScrollList = styled.div`
    display: flex;
    cursor: grab;
`;
const Scroll = styled.div`
    overflow-x: scroll;
    cursor: grab;
`;

export default function ScrollListComponent({ children }) {
    const [width, setWidth] = useState(0);

    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    return (
        <Scroll>
            <ScrollList
                as={motion.div}
                drag="x"
                initial={{ x: 0 }}
                whileTap={{ cursor: "grab" }}
                dragConstraints={{ right: 0, left: -width }}
                ref={carousel}
            >
                {children}
            </ScrollList>
        </Scroll>
    );
}
