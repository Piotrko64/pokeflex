import React from "react";
import styled from "styled-components";
import { allTokens } from "../../../../data/dataTokens/allTokens";

import { ItemToken } from "../../../Playground/Tokens/ItemToken";

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
