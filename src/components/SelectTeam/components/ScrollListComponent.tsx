import styled from "styled-components";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { JsxChild } from "typescript";

const ScrollList = styled.div`
    display: flex;
    cursor: grab;
    justify-content: center;
`;
const Scroll = styled.div`
    overflow-x: hidden;
    cursor: grab;

    background-color: #ffffff2e;
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #60606047;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export default function ScrollListComponent({ children }: { children: JSX.Element }) {
    const [width, setWidth] = useState(0);

    const carousel = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
    }, []);
    return (
        <Scroll>
            <ScrollList
                as={motion.div}
                drag="x"
                initial={{ x: 0 }}
                whileTap={{ cursor: "grab" }}
                dragConstraints={{ right: width, left: -width }}
                ref={carousel}
            >
                {children}
            </ScrollList>
        </Scroll>
    );
}
