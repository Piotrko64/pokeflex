import styled from "styled-components";
import ListObjectsToRender from "./DataToRender";
const AllGuides = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;
const OneGuide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    color: ${(props: { choose: boolean }) => (props.choose ? "black" : "white")};
    padding: 10px;
    font-size: 1.5rem;
    border-left: none;
    transition: all 0.2s ease;
    cursor: pointer;

    background: ${({ choose }) => (choose ? "white" : "transparent")};
    &:nth-child(1) {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border-left: 2px solid white;
    }
    &:last-child {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
`;
export default function Routing({
    changeViewGuide,
    nameView,
}: {
    changeViewGuide: (e: string) => void;
    nameView: string;
}) {
    return (
        <AllGuides>
            {ListObjectsToRender.map((el) => (
                <OneGuide
                    choose={el.name === nameView}
                    key={el.name}
                    onClick={() => changeViewGuide(el.name)}
                >
                    {el.name}
                </OneGuide>
            ))}
        </AllGuides>
    );
}
