import { useDispatch } from "react-redux";
import styled from "styled-components";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Tooltip } from "../../Tooltip/tooltip";

import { motion } from "framer-motion";
import { tokenPowerUse } from "../../../_Reducer/StateFight";
import { useSelectorStateFight } from "../../../_Reducer/selectors/useSelectorStateFight";
import { OneTokenInterface } from "../../../@types/pokemonTokenData/TokenInterface";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

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
    position: relative;
    z-index: 98;
    &:hover {
        transform: scale(1.25);
        background: white;
        color: black;
        -webkit-box-shadow: 0px 0px 15px 5px #000000;
        box-shadow: 0px 0px 15px 5px #000000;
    }
`;

export function ItemToken({
    item,
    AI,
    noBattle,
}: {
    item: OneTokenInterface;
    AI?: boolean;
    noBattle?: boolean;
}) {
    const dispatch = useDispatch();
    const { all, yourTurn } = useSelectorStateFight();

    function handleUseToken(fun: () => StateFightInterface, id: string) {
        if (noBattle) {
            return;
        }
        if (AI || !all.myTokens.find((e: OneTokenInterface) => e.id === id) || !yourTurn) {
            return;
        }
        dispatch(tokenPowerUse([fun, id]));
    }

    return (
        <Tippy content={<Tooltip title={item.name} desc={item.desc} />}>
            <motion.div
                layout
                animate={{ opacity: 1 }}
                exit={
                    !noBattle
                        ? {
                              y: -50,
                              opacity: 0,
                              scale: 2,
                          }
                        : {}
                }
                transition={{ duration: 0.5 }}
                initial={{ opacity: 1 }}
            >
                <Item
                    onClick={() => {
                        handleUseToken(item.functionToken(all), item.id);
                    }}
                >
                    {item.icon}
                </Item>
            </motion.div>
        </Tippy>
    );
}
