import styled from "styled-components";
import Confetti from "react-confetti";
import { Fragment, useEffect } from "react";
import Tippy from "@tippyjs/react";
import Tooltip from "../../../Tooltip/tooltip";

const TokenAward = styled.div`
    border-radius: 50%;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    aspect-ratio: 1;
    color: black;
    font-size: 3rem;
    transition: transform 3s ease;
    transform: rotateZ(360deg);
`;

function ListTokenAwards({ tokens }) {
    useEffect(() => {
        localStorage.setItem("tokens", tokens);
    }, []);
    return (
        <Fragment>
            {tokens.map((el) => (
                <Tippy content={<Tooltip title={el.name} desc={el.desc} />}>
                    <TokenAward> {el.icon} </TokenAward>
                </Tippy>
            ))}
        </Fragment>
    );
}
export default ListTokenAwards;
