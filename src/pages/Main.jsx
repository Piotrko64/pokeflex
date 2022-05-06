import styled from "styled-components";
import AtroposSide from "../components/Main/AtroposSide";
import LeftSide from "../components/Main/LeftSide";

const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    background-size: 200% 200%;
    max-width: 1270px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

function MainPage() {
    return (
        <Main>
            <LeftSide />
            <AtroposSide />
        </Main>
    );
}

export default MainPage;
