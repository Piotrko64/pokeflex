import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import { useIsLevelWon } from "../../hooks/levels/useIsLevelWon";
import { LevelInterface } from "../../@types/levels/LevelInterface";

const OneLevelDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.color};
    width: 300px;
    padding: 5px;
    border-radius: 15px;
    font-family: "Koulen", cursive;
    font-size: 22px;
    cursor: pointer;
    color: white;
    margin: 10px;
    -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.97);
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.97);
    transition: all 0.2s ease;
    text-shadow: 0px 0px 2px #000000;
    &:hover {
        transform: scale(1.05);
    }
`;

const Check = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
`;

function OneLevel({ value }: { value: LevelInterface }) {
    const isWin = useIsLevelWon(value.award);
    return (
        <OneLevelDiv color={value.color}>
            {value.name}
            {isWin && (
                <Check>
                    <BsCheckLg />
                </Check>
            )}
        </OneLevelDiv>
    );
}

export default OneLevel;
