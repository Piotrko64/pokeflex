import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const HPplus = styled.div`
    font-size: 16rem;
    color: rgba(179, 15, 15, 1);
    position: absolute;
    top: 0;
    z-index: 1000;
    text-shadow: 0px 0px 20px #ce0000;
`;
const HPminus = styled(HPplus)`
    color: #2c8a00;
    text-shadow: 0px 0px 14px #2c8a00;
`;

function MotionValue({ value }) {
    return (
        <motion.div
            layout
            animate={{ opacity: 0, x: -150 }}
            exit={{}}
            transition={{ duration: 1 }}
            initial={{ opacity: 1.5 }}
        >
            {value}
        </motion.div>
    );
}

function AnimHP({ value, deleteHpChange }) {
    useEffect(() => {
        setTimeout(() => {
            deleteHpChange();
        }, 750);
    }, []);
    return (
        !!value &&
        (value < 0 ? (
            <HPplus>
                <MotionValue value={value} />
            </HPplus>
        ) : (
            <HPminus>
                <MotionValue value={value} />
            </HPminus>
        ))
    );
}
export default AnimHP;
