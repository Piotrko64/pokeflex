import React from "react";
import styled from "styled-components";
const Title = styled.h2`
    text-align: center;
    margin: 10px 0;
`;
export const TitleScroll = ({ title }: { title: string }) => {
    return (
        <>
            <Title>{title}</Title>
        </>
    );
};
