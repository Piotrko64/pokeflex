import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { levels } from "../../data/dataLevels/levelsMainList";
import OneLevel from "./OneLevel";
const ListLevel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const ChooseLevelPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;
function ChooseLevelMainPage() {
    return (
        <ChooseLevelPage>
            <h1> Choose level!</h1>
            <ListLevel>
                {levels.map((el) => (
                    <Link to={`/levels/${el.id}`} key={el.name}>
                        <OneLevel value={el} />
                    </Link>
                ))}
            </ListLevel>
        </ChooseLevelPage>
    );
}

export default ChooseLevelMainPage;
