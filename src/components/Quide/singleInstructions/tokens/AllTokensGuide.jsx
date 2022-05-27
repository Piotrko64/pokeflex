import React, { useState } from "react";
import styled from "styled-components";
import { allTokens } from "../../../../data/allTokens";
import ItemToken from "../../../Playground/Tokens/ItemToken";
import OneTokenScroll from "../../../SelectTeam/components/ScrollTokens/OneTokenScroll";
const FlexWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 750px;
    margin: auto;
`;

const OneToken = styled.div`
    margin: 20px;
`;

function AllTokensGuide() {
    return (
        <FlexWrap>
            {allTokens.map((el) => (
                <OneToken>
                    <ItemToken item={el} noBattle />
                </OneToken>
            ))}
        </FlexWrap>
    );
}

export default AllTokensGuide;
