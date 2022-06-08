import React from "react";
import ReactMarkdown from "react-markdown";

import styled from "styled-components";

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    & > svg {
        font-size: 1.4rem;
        margin: 0 10px;
    }
`;
const Description = styled.div`
    font-family: "Lato";
    text-align: center;
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: black;
    width: 100%;
    padding: 10px;
    margin: 10px;
    font-family: "Lato";
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const OneStat = ({ stat }) => {
    const { logo, description, name } = stat;
    return (
        <Flex>
            {/* <Logo>{logo}</Logo> */}
            <Column>
                <Title>
                    {logo}
                    {name}
                    {logo}
                </Title>
                <Description>
                    <ReactMarkdown>{description}</ReactMarkdown>
                </Description>
            </Column>
        </Flex>
    );
};

export default OneStat;
