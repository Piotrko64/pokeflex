import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { animation, choose, noEnemy, computerMove, tokenPowerUse } from "../_Actions/mainAction";

import GroundForCards from "../components/Playground/groundFriends";
import lighter from "../functions/powerTokens/lighter";
import { allTokens } from "../data/allTokens";

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
    const All = useSelector((state) => state.FriendsTeam);
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
            dispatch(computerMove("17mrMimeE41718"));
            dispatch(animation(allCoordinates.find((e) => e.id === "17mrMimeE41718").coordinate));
        }, 1000);
    }
    function handleUseToken(fun) {
        dispatch(tokenPowerUse(fun));
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
            <button onClick={() => handleUseToken(allTokens[0].functionToken(All))}>Zapalniczka</button>
        </>
    );
}

export default QuickGame;
