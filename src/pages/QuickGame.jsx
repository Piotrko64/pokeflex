import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { animation, choose, noEnemy, computerMove } from "../_Actions/mainAction";

import GroundForCards from "../components/Playground/groundFriends";

const WholeField = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1800px;
`;
const Cos = styled.div`
    transform: translateX(80px);
    transition: all 5s ease;
`;

function QuickGame() {
    const dispatch = useDispatch();
    const FriendsTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const EnemyTeam = useSelector((state) => state.FriendsTeam.enemyTeam);
    const whoAttack = useSelector((state) => state.FriendsTeam.whoAttack);
    const whoIsAttack = useSelector((state) => state.FriendsTeam.whoIsAttack);
    const allCoordinates = useSelector((state) => state.FriendsTeam.allCoordinates);
    function handleComputerChoose(x) {
        dispatch(computerMove(x));
        dispatch(animation([]));
    }
    function handleMoveComputer(x) {
        handleComputerChoose(x);
        setTimeout(() => {
            dispatch(computerMove("Barbasaur060520222215Grass"));
            dispatch(animation(allCoordinates.find((e) => e.id === "Barbasaur060520222215Grass").coordinate));
        }, 1000);
    }
    return (
        <>
            <h1>{`${whoAttack} attack ${whoIsAttack}`} </h1>
            {whoAttack && <Cos>AAA</Cos>}
            <WholeField>
                <GroundForCards pokemons={FriendsTeam} />
                <GroundForCards pokemons={EnemyTeam} />
            </WholeField>

            <button onClick={() => handleMoveComputer("Charmander060520221905")}>Symuluj</button>
        </>
    );
}

export default QuickGame;
