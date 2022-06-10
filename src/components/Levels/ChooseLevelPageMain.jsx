import { Link } from "react-router-dom";
import styled from "styled-components";
import levels from "../../data/dataLevels/levels";
import OneLevel from "./OneLevel";
const ListLevel = styled.div`
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
`;
const ChooseLevelPage = styled.div`
    display: flex;

    align-items: center;
    flex-direction: column;
    height: 100vh;
`;
function ChooseLevelPageMain() {
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

export default ChooseLevelPageMain;
