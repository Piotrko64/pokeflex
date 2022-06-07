import styled from "styled-components";

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
    &:hover {
        transform: scale(1.05);
    }
`;

function OneLevel({ value }) {
    return <OneLevelDiv color={value.color}>{value.name}</OneLevelDiv>;
}

export default OneLevel;
