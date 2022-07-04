import styled from "styled-components";

import { Fragment, useEffect } from "react";
import Tippy from "@tippyjs/react";
import { Tooltip } from "../../../Tooltip/tooltip";
import { OneTokenInterface } from "../../../../@types/pokemonTokenData/TokenInterface";

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
    margin-bottom: 25px;
`;

function TokenAwards({ token }: { token: OneTokenInterface }) {
    useEffect(() => {
        const checkAllTokensAward = JSON.parse(localStorage.getItem("tokensAward")!) || [];

        !checkAllTokensAward.length && localStorage.setItem("tokensAward", "[]");

        checkAllTokensAward.push(token.idAward);

        localStorage.setItem("tokensAward", JSON.stringify([...new Set(checkAllTokensAward)]));
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
