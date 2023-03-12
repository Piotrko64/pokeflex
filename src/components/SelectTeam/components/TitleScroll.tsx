import styled from "styled-components";
const Title = styled.h2`
    text-align: center;
    margin: 20px 0 10px;
`;
export const TitleScroll = ({ title }: { title: string }) => {
    return <Title>{title}</Title>;
};
