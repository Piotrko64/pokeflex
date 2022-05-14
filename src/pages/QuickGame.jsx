import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { animation, choose, noEnemy, computerMove, tokenPowerUse } from "../_Actions/mainAction";

import GroundForCards from "../components/Playground/groundFriends";

const WholeField = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1800px;
    margin: auto;
`;

function QuickGame() {
    const dispatch = useDispatch();

    const All = useSelector((state) => state.FriendsTeam);

    const yourTurn = useSelector((state) => state.FriendsTeam.yourTurn);

    const FriendsTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const FriendsTokens = useSelector((state) => state.FriendsTeam.myTokens);

    const EnemyTeam = useSelector((state) => state.FriendsTeam.enemyTeam);
    const EnemyTokens = useSelector((state) => state.FriendsTeam.enemyTokens);

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

    return (
        <>
            <h1>{`${whoAttack} attack ${whoIsAttack}`} </h1>

            <WholeField>
                <GroundForCards pokemons={FriendsTeam} tokens={FriendsTokens} />
                {yourTurn ? "Your Turn" : "Turn of enemy"}
                <GroundForCards pokemons={EnemyTeam} tokens={EnemyTokens} AI />
            </WholeField>

            {/* <button onClick={() => handleMoveComputer("Charmander060520221905")}>Symuluj</button>
            <button onClick={() => handleUseToken(allTokens[1].functionToken(All))}>
                Zapalniczka {allTokens[1].icon}
            </button>
            <button onClick={() => handleUseToken(allTokens[5].functionToken(All))}>
                elektro {allTokens[5].icon}
            </button> */}
        </>
    );
}

export default QuickGame;
