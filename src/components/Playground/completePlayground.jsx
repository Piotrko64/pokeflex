import styled from "styled-components";

import quickGameSoundtrack from "../../Audio/mainSoundtracks/Chill.mp3";

import { useSelector } from "react-redux";

import GroundForCards from "./GroundCards";
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
    const Win = useSelector((state) => state.FriendsTeam.whoWin);

    const yourTurn = useSelector((state) => state.FriendsTeam.yourTurn);

    const FriendsTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const FriendsTokens = useSelector((state) => state.FriendsTeam.myTokens);

    const EnemyTeam = useSelector((state) => state.FriendsTeam.enemyTeam);
    const EnemyTokens = useSelector((state) => state.FriendsTeam.enemyTokens);

    const volume = useSelector((state) => state.SettingsReducer.Volume);

    const setMusic = useSountrack(music, volume);

    const YourTurnMemo = useMemo(() => <YourTurn turn={yourTurn} />, [yourTurn]);

    useEffect(() => {
        setMusic(music || quickGameSoundtrack);
    }, [music]);

    useBeginFight();
    useShowWinner();
    useTurnEnemy();

    const GroundForFriends = useMemo(
        () => <GroundForCards pokemons={FriendsTeam} tokens={FriendsTokens} />,
        [FriendsTeam, FriendsTokens]
    );
    const GroundForEnemy = useMemo(
        () => <GroundForCards pokemons={EnemyTeam} tokens={EnemyTokens} AI={true} />,
        [EnemyTeam, EnemyTokens]
    );

    return (
        <>
            <WholeField>
                {GroundForFriends}
                {YourTurnMemo}
                {GroundForEnemy}
            </WholeField>
            {Win && <WinLose value={Win} />}
        </>
    );
}

export default CompletePlayground;
