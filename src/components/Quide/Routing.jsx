import { Link } from "react-router-dom";
import styled from "styled-components";
const AllGuides = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;
const OneGuide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    color: white;
    padding: 10px;
    font-size: 1.5rem;
    &:nth-child(1) {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border-right: none;
    }
    &:last-child {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        border-left: none;
    }
`;
export default function Routing() {
    return (
        <AllGuides>
            <OneGuide>General</OneGuide>
            <OneGuide>General</OneGuide>
            <OneGuide>General</OneGuide>
        </AllGuides>
    );
}
