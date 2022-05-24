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

function TokenAwards({ token }) {
    useEffect(() => {
        const checkAllTokensAward = JSON.parse(localStorage.getItem("tokens")) || [];
        !checkAllTokensAward.length && localStorage.setItem("tokens", "[]");

        checkAllTokensAward.push(token.idAward);

        console.log(checkAllTokensAward);
        localStorage.setItem("tokens", JSON.stringify([...new Set(checkAllTokensAward)]));
    }, []);
    return (
        <Fragment>
            <Tippy content={<Tooltip title={token.name} desc={token.desc} />}>
                <TokenAward> {token.icon} </TokenAward>
            </Tippy>
        </Fragment>
    );
}
export default TokenAwards;
