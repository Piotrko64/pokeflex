import styled from "styled-components";

import quickGameSoundtrack from "../../Audio/mainSoundtracks/Chill.mp3";

import { useSelector } from "react-redux";

import GroundForCards from "./GroundForCards";
import YourTurn from "./YourTurn";
import { useEffect, useMemo } from "react";

import WinLose from "./WinLoseComponents/WinLose";
import useSountrack from "../../hooks/useSoundtrack";

import useBeginFight from "../../hooks/fightHooks/completePlayground/useBeginFight";
import useShowWinner from "../../hooks/fightHooks/completePlayground/useShowWinner";
import useTurnEnemy from "../../hooks/fightHooks/completePlayground/useTurnEnemy";

const WholeField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1800px;
    margin: auto;
    flex-direction: column-reverse;
    min-height: 100vh;
`;

function CompletePlayground({ music }) {
    const win = useSelector((state) => state.StateFightsReducer.whoWin);

    const yourTurn = useSelector((state) => state.StateFightsReducer.yourTurn);

    const friendsTeam = useSelector((state) => state.StateFightsReducer.myTeam);
    const friendsTokens = useSelector((state) => state.StateFightsReducer.myTokens);

    const enemyTeam = useSelector((state) => state.StateFightsReducer.enemyTeam);
    const enemyTokens = useSelector((state) => state.StateFightsReducer.enemyTokens);

    const volume = useSelector((state) => state.SettingsReducer.volume);

    const setMusic = useSountrack(music, volume);

    const YourTurnMemo = useMemo(() => <YourTurn turn={yourTurn} />, [yourTurn]);

    useEffect(() => {
        setMusic(music || quickGameSoundtrack);
    }, [music]);

    useBeginFight();
    useShowWinner();
    useTurnEnemy();

    const GroundForFriends = useMemo(
        () => <GroundForCards pokemons={friendsTeam} tokens={friendsTokens} />,
        [friendsTeam, friendsTokens]
    );
    const GroundForEnemy = useMemo(
        () => <GroundForCards pokemons={enemyTeam} tokens={enemyTokens} AI={true} />,
        [enemyTeam, enemyTokens]
    );

    return (
        <>
            <WholeField>
                {GroundForFriends}
                {YourTurnMemo}
                {GroundForEnemy}
            </WholeField>
            {win && <WinLose value={win} />}
        </>
    );
}

export default CompletePlayground;
