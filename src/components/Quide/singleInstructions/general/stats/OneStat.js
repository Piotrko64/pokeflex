import React from "react";
import ReactMarkdown from "react-markdown";

import styled from "styled-components";

const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    & > svg {
        font-size: 1rem;
        margin: 0 10px;
    }
`;

const OneStat = ({ stat }) => {
    const { logo, description, name } = stat;
    return (
        <>
            <Title>
                {logo} {name} {logo}
            </Title>
            <p>
                <ReactMarkdown>{description}</ReactMarkdown>
            </p>
        </>
    );
};

export default OneStat;
