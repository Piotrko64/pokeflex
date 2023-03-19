import styled from "styled-components";
import { useEffect } from "react";
import Tippy from "@tippyjs/react";
import { Tooltip } from "../../../Tooltip/tooltip";
import { OneTokenInterface } from "../../../../@types/pokemonTokenData/TokenInterface";
import { useDispatch, useSelector } from "react-redux";
import { AllStateReducer } from "../../../../@types/_Reducer/AllStateReducer";
import { addFromLocalStorageFn } from "../../../../_Reducer/functionsForReducer/YourItems/addFromLocalStorage";
import { addItemsFromLocalStorage } from "../../../../_Reducer/YourItems";

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
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAllTokensAward = JSON.parse(localStorage.getItem("tokensAward")!) || [];

        !checkAllTokensAward.length && localStorage.setItem("tokensAward", "[]");

        checkAllTokensAward.push(token.idAward);

        localStorage.setItem("tokensAward", JSON.stringify([...new Set(checkAllTokensAward)]));
        dispatch(addItemsFromLocalStorage());
    }, []);

    return (
        <Tippy content={<Tooltip title={token.name} desc={token.desc} />}>
            <TokenAward> {token.icon} </TokenAward>
        </Tippy>
    );
}
export default TokenAwards;
