import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { tokenPowerUse } from "../../../_Actions/mainAction";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Tooltip from "../../Tooltip/tooltip";

import { motion } from "framer-motion";

const Item = styled.button`
    border: 2px solid white;
    font-size: 28px;
    color: white;
    border-radius: 50%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    cursor: pointer;
    transition: all 0.1s linear;
    z-index: 9999;
    &:hover {
        transform: scale(1.25);
        background: white;
        color: black;
        -webkit-box-shadow: 0px 0px 15px 5px #000000;
        box-shadow: 0px 0px 15px 5px #000000;
    }
`;

function ItemToken({ item, AI }) {
    const dispatch = useDispatch();
    const All = useSelector((state) => state.FriendsTeam);
    const yourTurn = useSelector((state) => state.FriendsTeam.yourTurn);
    function handleUseToken(fun, id) {
        if (AI || !All.myTokens.find((e) => e.id === id) || !yourTurn) {
            return;
        }
        dispatch(tokenPowerUse(fun, id));
    }

    return (
        <Tippy content={<Tooltip title={item.name} desc={item.desc} />}>
            <motion.div
                layout
                animate={{ opacity: 1 }}
                exit={{
                    y: -100,
                    opacity: 0,
                    scale: 2,
                }}
                transition={{ duration: 1 }}
                initial={{ opacity: 1 }}
            >
                <Item onClick={() => handleUseToken(item.functionToken(All), item.id)}>{item.icon}</Item>
            </motion.div>
        </Tippy>
    );
}
export default ItemToken;
