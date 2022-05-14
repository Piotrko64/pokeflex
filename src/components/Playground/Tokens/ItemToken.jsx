import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { tokenPowerUse } from "../../../_Actions/mainAction";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Tooltip from "../../Tooltip/tooltip";
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
    function handleUseToken(fun, id) {
        if (AI) {
            return;
        }
        dispatch(tokenPowerUse(fun, id));
    }

    return (
        <Tippy content={<Tooltip title={item.name} desc={item.desc} />}>
            <Item onClick={() => handleUseToken(item.functionToken(All), item.id)}>{item.icon}</Item>
        </Tippy>
    );
}
export default ItemToken;
